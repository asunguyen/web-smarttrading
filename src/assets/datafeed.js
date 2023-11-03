import {
	makeApiRequest,
	GeSymbolType,
} from './helpers.js';
import {
	subscribeOnStream,
	unsubscribeFromStream,
	searchSymbolsFromStream,
	getDataSymbolHistoryFromStream,
	defaultGetSymbolShistory
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
	}
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
		searchSymbolsFromStream(userInput, (data) => {
			var listData = data;
			let allSymbols = [];
			listData.forEach(symbol => {
				allSymbols = [...allSymbols, {
					symbol: symbol.symbol,
					pro_name: symbol.symbol,
					full_name: symbol.symbol,
					description: symbol.description,
					exchange: symbol.exchange,
					type: symbol.type,
					pathRq: symbol.pathRq
				}];
			});
			const newSymbols = allSymbols.filter(symbol => {
				symbol.name = symbol.symbol;
				symbol.full_name = symbol.symbol;
				const isFullSymbolContainsInput = symbol.symbol
					.toLowerCase()
					.search(userInput.toLowerCase()) !== -1;
				return isFullSymbolContainsInput;
			});
			console.log("newSymbols:: ", newSymbols);
			onResultReadyCallback(newSymbols);
		})

	},

	resolveSymbol: async (
		symbolName,
		onSymbolResolvedCallback,
		onResolveErrorCallback,
		extension
	) => {
		console.log('[resolveSymbol]: Method call', symbolName);
		let dem = 0;
		var run = setInterval(() => {
			dem++;
			if (infoSymbol) {
				clearInterval(run);
				const symbolInfo = {
					name: infoSymbol.name,
					full_name: infoSymbol.full_name,
					description: infoSymbol.description,
					listed_exchange: '',
					type: infoSymbol.type,
					ticker: infoSymbol.name,
					exchange: infoSymbol.exchange,
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
					pathRq: infoSymbol.pathRq,
				};
		
				console.log('[resolveSymbol]: Symbol resolved', symbolName);
				onSymbolResolvedCallback(symbolInfo);
			} else {
				if (dem == 5) {
					clearInterval(run);
					defaultGetSymbolShistory(symbolName, (data) => {
						infoSymbol = data.infos;
						const symbolInfo = {
							name: infoSymbol.name,
							full_name: infoSymbol.full_name,
							description: infoSymbol.description,
							listed_exchange: '',
							type: infoSymbol.type,
							ticker: infoSymbol.name,
							exchange: infoSymbol.exchange,
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
							pathRq: infoSymbol.pathRq,
						};
				
						console.log('[resolveSymbol]: Symbol resolved', symbolName);
						onSymbolResolvedCallback(symbolInfo);
					})
				}
			}

		}, 1000);
		
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		const { from, to, firstDataRequest } = periodParams;
		console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
		var resol = resolution;
		try {
			if (resolution == "60" || resolution == "120" || resolution == "180" || resolution == "240") resol = "1H";
		}
		catch (e) { }
		const urlParameters = {
			symbol: symbolInfo.name,
			full_name: symbolInfo.full_name,
			from: from,
			to: to,
			resolution: resol,
			getHistory: true
		};
		//console.log("OK:",symbolInfo);
		const query = Object.keys(urlParameters)
			.map(name => `${name}=${encodeURIComponent(urlParameters[name])}`)
			.join('&');
		try {
			getDataSymbolHistoryFromStream(urlParameters, (data) => {
				const dataChart = data.chart.reverse();
				if (dataChart.length <= 2) {
					// "noData" should be set if there is no data in the requested period
					onHistoryCallback([], {
						noData: false,
					});
					console.log('[getBars]: No data');
				}
				else {
	
				}
				let bars = [];
				for (let i = 0; i < dataChart.length; i++) {
					let timeStamp = dataChart[i].time;
					if (timeStamp >= from && timeStamp < to) {
						bars = [...bars, {
							time: timeStamp * 1000,
							low: dataChart[i].min,
							high: dataChart[i].max,
							open: dataChart[i].open,
							close: dataChart[i].close,
							volume: dataChart[i].volume,
						}];
					}
				}
				if (firstDataRequest) {
					lastBarsCache.set(symbolInfo.full_name, {
						...bars[bars.length - 1],
					});
				}
				onHistoryCallback(bars, {
					noData: false,
				});
			})

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
			lastBarsCache.get(symbolInfo.full_name)
		);
	},

	unsubscribeBars: (subscriberUID) => {
		console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
		unsubscribeFromStream(subscriberUID);
	},
};
