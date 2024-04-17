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
	supported_resolutions: ['1', "3", '5', "10", '15', "20", '30', "45", '1H', '2H', "3H", "4H", 'D', "3D", 'W', "2W", 'M', "3M", "6M", "12M"],

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
	"supports_timescale_marks": false,
	"supports_time": false,
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

async function loadDataBarCustom(symbolInfo, urlParameters, timeEnd, firstDataRequest, onHistoryCallback, onErrorCallback) {
	try {
		countHis++;
		let urlParametersC = urlParameters;
		urlParametersC.to = timeEnd;
		urlParametersC.from = timeEnd - 604800;
		let from = urlParametersC.from;
		let to = urlParametersC.to;
		const query = Object.keys(urlParametersC)
			.map(name => `${name}=${encodeURIComponent(urlParametersC[name])}`)
			.join('&');
		const response = await makeApiRequest(`history?${query}`);
		const data = response.data;
		let dataBar = [];
		let bars = [];
		if (data.nextTime || data.nextTime >= 0) {
			if (data.t && data.t.length > 0) {
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
					noData: true
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
				console.log(2);
				for (let i = 0; i < dataBar.length; i++) {
					let time = dataBar[i].time;
					if (symbolInfo.type == "spot" && time >= from && time <= to) {
						bars = [...bars, {
							time: dataBar[i].time * 1000,
							low: parseFloat(dataBar[i].min),
							high: parseFloat(dataBar[i].max),
							open: parseFloat(dataBar[i].open),
							close: parseFloat(dataBar[i].close),
							volume: parseFloat(dataBar[i].volume),
						}];
					} else {
						bars = [...bars, {
							time: dataBar[i].time * 1000,
							low: parseFloat(dataBar[i].min),
							high: parseFloat(dataBar[i].max),
							open: parseFloat(dataBar[i].open),
							close: parseFloat(dataBar[i].close),
							volume: parseFloat(dataBar[i].volume),
						}];
					}

				}
				if (symbolInfo.type == "spot") {
					if (firstDataRequest) {
						lastBarsCache.set(symbolInfo.full_name, {
							...bars[bars.length - 1],
						});
					}
				} else {
					lastBarsCache.set(symbolInfo.full_name, {
						...bars[bars.length - 1],
					});
				}

				if (bars.length == 0) {
					onHistoryCallback([], {
						noData: true,
					});
				} else {
					onHistoryCallback(bars, {
						noData: false,
					});
				}

			}
		}
		if (bars && bars.length > 0) {
			timeEnd = bars[0].time / 1000;
			if (timeEnd > 1103051358 && countHis < 20) {
				setTimeout(function () {
					loadDataBarCustom(symbolInfo, urlParametersC, timeEnd, firstDataRequest, onHistoryCallback, onErrorCallback);
				}, 1000);

			}
		}
	} catch (err) {
		console.log("data bar custom error:: ", err);
		onErrorCallback(err);
	}
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
		let symbolInfo = {...symbolItem};
		symbolInfo.name = symbolItem.symbol;
			symbolInfo.full_name = symbolItem.full_name;
			symbolInfo.description = symbolItem.description;
			symbolInfo.listed_exchange = '';
			symbolInfo.type = symbolItem.type;
			symbolInfo.ticker = symbolItem.symbol;
			symbolInfo.exchange = symbolItem.exchange;
			symbolInfo.format = 'price';
			symbolInfo.supported_resolutions = configurationData.supported_resolutions;
			symbolInfo.timezone = 'Etc/UTC';
			symbolInfo.minmov = 1;
			symbolInfo.pricescale = 100;
			symbolInfo.has_intraday = true;
			symbolInfo.intraday_multipliers = ['1', "3", '5', "10", '15', "20", '30', "45", '1H', '2H', "3H", "4H", 'D', "3D", 'W', "2W", 'M', "3M", "6M", "12M"],
			symbolInfo.volume_precision = 8;
			symbolInfo.data_status = 'streaming';
			symbolInfo.pathRq = symbolItem.pathRq;
			symbolInfo.id = symbolItem.id;
		if (symbolItem.exchange == "HOSE" || symbolItem.exchange == "HNX" || symbolItem.exchange == "UPCOM" || (symbolItem.name == "VN30F1M" || symbolItem.name == "VN30F1Q" || symbolItem.name == "VN30F2M" || symbolItem.name == "VN30F2Q")) {
			symbolInfo.session = "0845-1500";
			symbolInfo.minmove2 = 0;
			symbolInfo.timezone = 'Asia/Ho_Chi_Minh';
		} else {
			if (symbolItem.type == "spot") {
				symbolInfo.session = "24x7";
				symbolInfo.has_intraday = true;
			} else {
				symbolInfo.session = "24x7";
				symbolInfo.minmove2= 10;
				symbolInfo.pricescale= 100000;
			}
			
		}

		console.log('[resolveSymbol]: Symbol resolved', symbolInfo);
		onSymbolResolvedCallback(symbolInfo);
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		let { from, to, firstDataRequest } = periodParams;
		var resol = resolution;
		if ((symbolInfo.name == "VN30F1M" || symbolInfo.name == "VN30F1Q" || symbolInfo.name == "VN30F2M" || symbolInfo.name == "VN30F2Q") || (symbolInfo.exchange == "HNX" || symbolInfo.exchange == "HOSE" || symbolInfo.exchange == "UPCOM")) {
			if (from > 1103051358) {
				from = 1103051358;
			}
			if (new Date().getTime() > to*1000) {
				to = new Date().getTime()/1000;
			}
		} else {
			if (to - from < 486000) {
				from = to - 486000;
			}
		}
		
		let urlParameters = {
			symbol: symbolInfo.name,
			exchange: symbolInfo.exchange,
			from: from,
			to: to,
			resolution: resol,
			firstDataRequest: firstDataRequest,
			type: symbolInfo.type
		};
		const query = Object.keys(urlParameters)
			.map(name => `${name}=${encodeURIComponent(urlParameters[name])}`)
			.join('&');
		try {
			const response = await makeApiRequest(`history?${query}`);
			const data = response.data;
			let dataBar = [];
			let bars = [];
			if (data.nextTime || data.nextTime >= 0) {
				if (data.t && data.t.length > 0) {
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
					for (let i = 0; i < dataBar.length; i++) {
						let time = dataBar[i].time;
						if (symbolInfo.type == "spot" && resol != 1) {
							if (time >= from && time <= to) {
								bars = [...bars, {
									time: parseFloat(dataBar[i].time + "000"),
									low: parseFloat(dataBar[i].min),
									high: parseFloat(dataBar[i].max),
									open: parseFloat(dataBar[i].open),
									close: parseFloat(dataBar[i].close),
									volume: parseFloat(dataBar[i].volume),
								}];
							}
						} else {
							bars = [...bars, {
								time: parseFloat(dataBar[i].time + "000"),
								low: parseFloat(dataBar[i].min),
								high: parseFloat(dataBar[i].max),
								open: parseFloat(dataBar[i].open),
								close: parseFloat(dataBar[i].close),
								volume: parseFloat(dataBar[i].volume),
							}];
						}
					}
					

				}
			}
			if (firstDataRequest) {
				lastBarsCache.set(symbolInfo.full_name, {
					...bars[bars.length - 1],
				});
			}
			if (bars.length == 0) {
				onHistoryCallback([], {
					noData: true,
				});
			} else {
				onHistoryCallback(bars, {
					noData: false,
				});
			}
			//xử lý lấy data history
			if (bars && bars.length > 0) {
				timeEnd = bars[0].time / 1000;

			} else {
				if ((resolution == "1" || resolution == "3" || resolution == "5" || resolution == "10" || resolution == "15" || resolution == "30") && timeEnd > 1103051358) {
					countHis = 1;
					loadDataBarCustom(symbolInfo, urlParameters, timeEnd, firstDataRequest, onHistoryCallback, onErrorCallback);
				}
			}
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
		countHis = 0;
		console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
		unsubscribeFromStream(subscriberUID);
		unsubscribeFromStreamps(subscriberUID)
	},
};
