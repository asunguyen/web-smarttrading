import {
	makeApiRequest,
	GeSymbolType,
} from './helpers.js';
import {
	subscribeOnStream,
	unsubscribeFromStream,
} from './streaming.js';

import {
	subscribeOnStreamps,
	unsubscribeFromStreamps
} from "./streamingps.js"
const lastBarsCache = new Map();
// DatafeedConfiguration implementation
const configurationData = {
	// Represents the resolutions for bars supported by your datafeed
	supported_resolutions: ['1', "3", '5', "10", '15', "20", '30', "45", '60', "90", '120', "180", "240", 'D', "3D", 'W', "2W", 'M', "3M", "6M", "12M"],

	// The `exchanges` arguments are used for the `searchSymbols` method if a user selects the exchange
	exchanges: [
		{
			'name': "Tất cả",
			'value': '',
			'desc': "Tất cả sàn giao dịch"
		}
	],
	// The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
	symbols_types: [
		{
			'name': "Tất cả",
			'value': 'Tất cả'
		}
	],
	"supports_search": true,
	"supports_group_request": false,
	"supports_marks": true,
	"supports_timescale_marks": true,
	"supports_time": true,
};

// Obtains all symbols for all exchanges supported by CryptoCompare API
async function getAllSymbols(symbolType) {
	const data = await GeSymbolType('search', "");
	let allSymbols = [];
	data.forEach(symbol => {
		allSymbols = [...allSymbols, {
			symbol: symbol.symbol,
			pro_name: symbol.symbol,
			full_name: symbol.symbol,
			description: symbol.full_name,
			exchange: symbol.exchange,
			type: symbol.type,
			pathRq: symbol.pathRq
		}];
	});
	return allSymbols;
}

export default {
	onReady: (callback) => {
		console.log('[onReady]: Method call');
		setTimeout(() => callback(configurationData));
	},

	searchSymbols: async (
		userInput,
		exchange,
		symbolType,
		onResultReadyCallback,
	) => {
		const symbols = await GeSymbolType('search', userInput);
		// const newSymbols = symbols.filter(symbol => {
		// 	const isExchangeValid = exchange === '' || symbol.exchange === exchange;
		// 	const isFullSymbolContainsInput = symbol.symbol
		// 		.toLowerCase()
		// 		.indexOf(userInput.toLowerCase()) !== -1;
		// 	return isExchangeValid && isFullSymbolContainsInput;
		// });
		onResultReadyCallback(symbols);
	},

	resolveSymbol: async (
		symbolName,
		onSymbolResolvedCallback,
		onResolveErrorCallback,
		extension
	) => {
		console.log("extension:: ", extension);
		console.log('[resolveSymbol]: Method call', symbolName);
		const symbols = await GeSymbolType('search', symbolName);
		const symbolItem = symbols.find(({
			full_name, symbol
		}) => (full_name === symbolName || symbol == symbolName));
		if (!symbolItem) {
			console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
			onResolveErrorCallback('cannot resolve symbol');
			return;
		}
		let symbolInfo;
		if (symbolItem.exchange == "HOSE" || symbolItem.exchange == "HNX" || symbolItem.exchange == "UPCOM") {
			symbolInfo = {
				name: symbolItem.symbol,
				full_name: symbolItem.full_name,
				description: symbolItem.description,
				listed_exchange: '',
				type: symbolItem.type,
				ticker: symbolItem.symbol,
				exchange: symbolItem.exchange,
				format: 'price',
				supported_resolutions: configurationData.supported_resolutions,
				timezone: 'Asia/Ho_Chi_Minh',
				session: '0900-1445',
				minmov: 1,
				pricescale: 100,
				has_intraday: true,
				intraday_multipliers: ['1', '60'],
				volume_precision: 8,
				data_status: 'streaming',
				pathRq: symbolItem.pathRq,
				id: symbolItem.id
			};
		} else {
			symbolInfo = {
				name: symbolItem.symbol,
				full_name: symbolItem.full_name,
				description: symbolItem.description,
				listed_exchange: '',
				type: symbolItem.type,
				ticker: symbolItem.symbol,
				exchange: symbolItem.exchange,
				format: 'price',
				supported_resolutions: configurationData.supported_resolutions,
				timezone: 'Asia/Ho_Chi_Minh',
				session: "24x7",
				minmov: 100,
				pricescale: 1,
				has_intraday: true,
				intraday_multipliers: ['1', '60'],
				volume_precision: 8,
				data_status: 'streaming',
				pathRq: symbolItem.pathRq,
				id: symbolItem.id
			};
		}
		

		console.log('[resolveSymbol]: Symbol resolved', symbolInfo);
		onSymbolResolvedCallback(symbolInfo);
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		let { from, to, firstDataRequest } = periodParams;
		console.log('[getBars]: Method call:: ');
		if (to - from < 76800) {
			from = to - 76800;
		}
		var resol = resolution;
		try {
			if (resolution == "60" || resolution == "120" || resolution == "180" || resolution == "240") resol = "1H";
		}
		catch (e) { }
		const urlParameters = {
			symbol: symbolInfo.name,
			exchange: symbolInfo.exchange,
			from: from,
			to: to,
			resolution: resol,
		};
		//console.log("OK:",symbolInfo);
		const query = Object.keys(urlParameters)
			.map(name => `${name}=${encodeURIComponent(urlParameters[name])}`)
			.join('&');
		try {
			const response = await makeApiRequest(`history?${query}`);
			const data = response.data;
			let dataBar = [];
			if (data.nextTime || data.nextTime >= 0) {
				let bars = [];
				for (var i = 0; i < data.t.length; i++) {
					bars = [...bars, {
						close: data.c[i],
						high: data.h[i],
						low: data.l[i],
						open: data.o[i],
						time: data.t[i] * 1000,
						volume: data.v[i]
					}]
				}
				if (firstDataRequest) {
					lastBarsCache.set(symbolInfo.full_name, {
						...bars[bars.length - 1],
					});
				}
				if (bars && bars.length > 0) {
					onHistoryCallback(bars, {
						noData: true
					});
				} else {
					onHistoryCallback([], {
						noData: false
					});
				}


			} else {
				dataBar = data;
				if (dataBar.length == 0) {
					// "noData" should be set if there is no data in the requested period
					onHistoryCallback([], {
						noData: true,
					});
					console.log('[getBars]: No data');
				}
				else {
					let bars = [];
					for (let i = 0; i < dataBar.length; i++) {
						bars = [...bars, {
							time: dataBar[i].time * 1000,
							low: dataBar[i].min,
							high: dataBar[i].max,
							open: dataBar[i].open,
							close: dataBar[i].close,
							volume: dataBar[i].volume,
						}];
						if (i == dataBar.length - 1) {
							if (firstDataRequest) {
								lastBarsCache.set(symbolInfo.full_name, {
									...bars[bars.length - 1],
								});
							}
							onHistoryCallback(bars, {
								noData: true,
							});
						}
					}
				}
			}
			//console.log(data);

		} catch (error) {
			console.log('[getBars]: Get error', error);
			onErrorCallback(error);
		}
	},

	subscribeBars: (
		symbolInfo,
		resolution,
		onRealtimeCallback,
		subscriberUID,
		onResetCacheNeededCallback,
	) => {
		console.log('[subscribeBars]: Method call with subscriberUID:', subscriberUID);
		subscribeOnStream(
			symbolInfo,
			resolution,
			onRealtimeCallback,
			subscriberUID,
			onResetCacheNeededCallback,
			lastBarsCache.get(symbolInfo.full_name)
		);
		subscribeOnStreamps(
			symbolInfo,
			resolution,
			onRealtimeCallback,
			subscriberUID,
			onResetCacheNeededCallback,
			lastBarsCache.get(symbolInfo.full_name)
		)
	},

	unsubscribeBars: (subscriberUID) => {
		console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
		unsubscribeFromStream(subscriberUID);
		unsubscribeFromStreamps(subscriberUID)
	},
};
