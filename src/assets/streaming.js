// const socketd = io("wss://dchart-socket.vndirect.com.vn/socket.io", {
//     'transports': ["websocket", "polling"],
//     'query': {
//       'symbol': "VN30F1M"
//     }
//   });
// const socketTrading = io("wss://tradingviewrealtime.vps.com.vn", {
//     'transports': ["websocket", "polling"],
//     'query': {
//       'symbol': "VN30F1M"
//     }
// })
// mongodbUrl = mongodb+srv://smarttrading:gcMXhKBgm45lRojO@smarttrading.s33oklk.mongodb.net/?retryWrites=true&w=majority
// jwtKey = smtchart


const socket = io("http://localhost:5001", { 'transports': ["websocket", "polling"] });

socket.on("onData", (data) => {
    let dataBar = data.chart;
    const newData = {
        symbol: data.infos.name,
        ts: Math.floor((dataBar.time + data.infos.delay)),
        Volume: parseFloat(dataBar.volume),
        price: parseFloat(dataBar.close),
        Hight: parseFloat(dataBar.max),
        Low: parseFloat(dataBar.min),
        Open: parseFloat(dataBar.open),
        Close: parseFloat(dataBar.close),
    };
    console.log("new dataa:: ", JSON.stringify(newData));
    const symbolList = "CHART." + newData.symbol;
    const subscriptionItem = channelToSubscription.get(symbolList);
    console.log("subscriptionItem:: ", subscriptionItem);
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;
    var lastBar = lastDailyBar;
    var lastBarTimestamp = lastBar.time;

    const isNewBar = JSON.stringify(lastBar) === '{}';

    let resolution = subscriptionItem.resolution;
    if (resolution.includes('D')) {
        resolution = 1440;
    } else if (resolution.includes('W')) {
        resolution = 10080;
    }

    const interval = resolution * 60;
    const roundedTimestamp = Math.floor(newData.ts / interval) * interval;
    const bar = updateBar(newData, lastDailyBar, subscriptionItem);
    var upBar;
    if (isNewBar || roundedTimestamp > lastBarTimestamp) {
        upBar = {
            ...lastDailyBar,
            symbol: lastDailyBar.symbol,
            resolution: subscriptionItem.resolution,
            time: newData.ts * 1000,
            open: newData.Open,
            high: newData.Hight,
            low: newData.Low,
            close: newData.Close,
            volume: newData.Volume
        };
    }
    else {
        upBar = {
            ...lastDailyBar,
            high: Math.max(lastDailyBar.high, bar.high),
            low: Math.min(lastDailyBar.low, bar.low),
            close: newData.price,
            volume: lastDailyBar.low + newData.volume,
            time: bar.time,
        };
    }
    subscriptionItem.lastDailyBar = upBar;
    // Send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(upBar));


})
socket.on("loadSymbol", (data) => {
    localStorage.setItem("loadSymbol", "");
    localStorage.setItem("loadSymbol", JSON.stringify(data));
});
const channelToSubscription = new Map();

function getNextDailyBarTime(barTime) {
    const date = new Date(barTime * 1000);
    date.setDate(date.getDate() + 1);
    return date.getTime() / 1000;
}

export function subscribeOnStream(
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscriberUID,
    onResetCacheNeededCallback,
    lastDailyBar,
) {
    console.log("chạy vào đây trước");
    const symbolList = "CHART." + symbolInfo.name;
    const channelString = ["addsymbol", symbolInfo.name];
    const handler = {
        id: subscriberUID,
        callback: onRealtimeCallback,
    };
    let subscriptionItem = channelToSubscription.get(channelString);
    if (subscriptionItem) {
        // Already subscribed to the channel, use the existing subscription
        subscriptionItem.handlers.push(handler);
        return;
    }
    subscriptionItem = {
        subscriberUID,
        resolution,
        lastDailyBar,
        handlers: [handler],
    };
    channelToSubscription.set(symbolList, subscriptionItem);
    socket.emit('addsymbol', { symbol: symbolInfo.name, resolution: resolution });
}

export function unsubscribeFromStream(subscriberUID) {
    for (const channelString of channelToSubscription.keys()) {
        const subscriptionItem = channelToSubscription.get(channelString);
        const handlerIndex = subscriptionItem.handlers
            .findIndex(handler => handler.id === subscriberUID);

        if (handlerIndex !== -1) {
            // Remove from handlers
            subscriptionItem.handlers.splice(handlerIndex, 1);

            if (subscriptionItem.handlers.length === 0) {
                // Unsubscribe from the channel if it was the last handler
                socket.emit('SubRemove', channelString);
                channelToSubscription.delete(channelString);
                break;
            }
        }
    }
}

function updateBar(newData, subscriber, lastDailyBar) {
    var lastBar = subscriber.lastBar || {};
    const isNewBar = JSON.stringify(lastBar) === '{}';

    let resolution = lastDailyBar.resolution;
    if (resolution.includes('D')) {
        resolution = 1440;
    } else if (resolution.includes('W')) {
        resolution = 10080;
    }

    const interval = resolution * 60;
    const roundedTimestamp = Math.floor(newData.ts / interval) * interval;
    const lastBarTimestamp = lastBar.time / 1000;

    let updatedBar = false;
    if (isNewBar || roundedTimestamp > lastBarTimestamp) {
        updatedBar = {
            symbol: subscriber.symbol,
            resolution: subscriber.resolution,
            time: newData.ts * 1000,
            open: newData.Open,
            high: newData.Hight,
            low: newData.Low,
            close: newData.Close,
            volume: newData.Volume
        };
    } else {
        lastBar.high = newData.Hight;
        lastBar.low = newData.Low;
        lastBar.volume = newData.volume;
        lastBar.close = newData.Close;
        updatedBar = lastBar;
    }

    return updatedBar;
}
export function searchSymbolsFromStream(symbol) {
    localStorage.setItem("symbolList", "");
    socket.emit("searchMarket", symbol);
    
    socket.on("searchrs", function (rs) {
        localStorage.setItem("symbolList", "");
        var data = rs;
        let allSymbols = [];
        data.forEach(symbol => {
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
        localStorage.setItem("symbolList", JSON.stringify(allSymbols));
    })
}

export function getBarFromStream(urlParameters, next) {
    socket.emit("getBar", urlParameters);
    socket.on("rsBar", (data) => {
        next(data);
    });
}