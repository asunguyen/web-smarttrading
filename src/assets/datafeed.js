import {
	makeApiRequest,
	GeSymbolType,
} from './helpers.js';
import {
	subscribeOnStream,
	unsubscribeFromStream,
	searchSymbolsFromStream,
	getBarFromStream
} from './streaming.js';

const lastBarsCache = new Map();
// DatafeedConfiguration implementation
const configurationData = {
	// Represents the resolutions for bars supported by your datafeed
	supported_resolutions: ['1', '3', '5', '10', '15', '30', '45', '60', '120', "180", "240", 'D', 'W', 'M'],

	// The `exchanges` arguments are used for the `searchSymbols` method if a user selects the exchange
	exchanges: [{
		'name': "Tất cả",
		'value': '',
		'desc': "Tất cả sàn giao dịch"
	},
	],
	// The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
	symbols_types: [{
		'name': "Tất cả",
		'value': 'Tất cả'
	}
	],
};

// Obtains all symbols for all exchanges supported by CryptoCompare API
async function getAllSymbols(symbolType) {

	const data = await GeSymbolType('all-exchanges', symbolType);
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
		searchSymbolsFromStream(userInput.toLowerCase());
		var run = setInterval(() => {
			var symbolList = localStorage.getItem("symbolList");
			if (symbolList && symbolList.length > 0) {
				clearInterval(run);
				const symbols = JSON.parse(symbolList);
				const newSymbols = symbols.filter(symbol => {
					const isExchangeValid = exchange === '' || symbol.exchange === exchange;
					const isFullSymbolContainsInput = symbol.symbol
						.toLowerCase()
						.indexOf(userInput.toLowerCase()) !== -1;
					return isExchangeValid && isFullSymbolContainsInput;
				});
				onResultReadyCallback(newSymbols);
			}

		}, 1000);

	},

	resolveSymbol: async (
		symbolName,
		onSymbolResolvedCallback,
		onResolveErrorCallback,
		extension
	) => {
		console.log('[resolveSymbol]: Method call', symbolName);
		var symbolList = localStorage.getItem("symbolList");
		const symbols = JSON.parse(symbolList) || [];
		const symbolItem = symbols.find(({
			symbol,
		}) => symbol === symbolName);
		if (!symbolItem) {
			console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
			onResolveErrorCallback('cannot resolve symbol');
			return;
		}
		// Symbol information object
		const symbolInfo = {
			name: symbolItem.symbol,
			full_name: symbolItem.full_name,
			description: symbolItem.description,
			listed_exchange: '',
			type: symbolItem.type,
			ticker: symbolItem.symbol,
			exchange: symbolItem.exchange,
			format: 'price',
			supported_resolutions: configurationData.supported_resolutions,
			session: '0900-1445',
			timezone: 'Asia/Ho_Chi_Minh',
			minmov: 1,
			pricescale: 100,
			has_intraday: true,
			intraday_multipliers: ['1', '60'],
			volume_precision: 8,
			data_status: 'streaming',
			pathRq: symbolItem.pathRq,
		};

		console.log('[resolveSymbol]: Symbol resolved', symbolName);
		onSymbolResolvedCallback(symbolInfo);
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		const { from, to, firstDataRequest } = periodParams;
		console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
		var resol = resolution;
		try {
			if (resolution == "60" || resolution == "120" || resolution == "180" || resolution == "240") resol = "1H";
		}
		catch (e) { }
		const urlParametersStream = {
			symbol: symbolInfo,
			from: from,
			to: to,
			resolution: resol,
		};
		//console.log("OK:",symbolInfo);
		
		try {
			getBarFromStream(urlParametersStream, (data) => {
				const chart = data.chart;
				if (chart.length === 0) {
					// "noData" should be set if there is no data in the requested period
					onHistoryCallback([], {
						noData: false,
					});
					console.log('[getBars]: No data');
				}
				let bars = [];
				for (let i = 0; i < chart.length; i++) {
					let timeStamp = chart[i].time;
					if (timeStamp >= from && timeStamp < to) {
						bars = [...bars, {
							time: timeStamp*1000,
							low: chart[i].min,
							high: chart[i].max,
							open: chart[i].open,
							close: chart[i].close,
							volume: chart[i].volume,
						}];
					}
				}
				if (firstDataRequest) {
					lastBarsCache.set(symbolInfo.name, {
						...bars[bars.length - 1],
					});
				}
				console.log(`[getBars]: returned bar`, bars);
				onHistoryCallback(bars, {
					noData: false,
				});
			});
			

		} catch (error) {
			console.log('[getBars]: Get error', error);
			onErrorCallback(error);
		}
		barInfor.symbolInfo = symbolInfo;
		barInfor.resolution = resolution;
		barInfor.periodParams = periodParams;
		barInfor.onHistoryCallback = onHistoryCallback;
		barInfor.onErrorCallback = onErrorCallback;
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
			lastBarsCache.get(symbolInfo.name)
		);
	},

	unsubscribeBars: (subscriberUID) => {
		console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
		unsubscribeFromStream(subscriberUID);
	},
};
