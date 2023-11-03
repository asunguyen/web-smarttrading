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
    infoSymbol = data.infos;
    let dataBar = data.chart;
    try {

        const newData = {
            symbol: data.infos.name,
            ts: Math.floor(dataBar.time),
            volume: parseFloat(dataBar.volume),
            price: parseFloat(dataBar.close / 1000),
            Hight: parseFloat(dataBar.hight / 1000),
            Low: parseFloat(dataBar.low / 1000),
            Open: parseFloat(dataBar.open / 1000),
            Close: parseFloat(dataBar.close / 1000),

        };

        const symbolList = "CHART." + dataBar.Symbol;
        const subscriptionItem = channelToSubscription.get(symbolList);
        if (subscriptionItem === undefined) {
            return;
        }
        const lastDailyBar = subscriptionItem ? subscriptionItem.lastDailyBar : null;
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
                time: new Date().getTime(),
                open: newData.Open,
                high: isNewBar ? newData.Hight : lastBar.close,
                low: isNewBar ? newData.Low : lastBar.close,
                close: newData.Close,
                volume: newData.volume
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



    }catch(err) {
        console.log(err);
    }
})

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
    socket.emit('stopGetHistory');
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
                console.log('[unsubscribeBars]: Unsubscribe from streaming. Channel:', channelString);
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
            time: roundedTimestamp,
            open: newData.price,
            high: isNewBar ? newData.price : lastBar.close,
            low: isNewBar ? newData.price : lastBar.close,
            close: newData.price,
            volume: newData.volume
        };
    } else {
        if (newData.price < lastBar.low) {
            lastBar.low = newData.price;
        } else if (newData.price > lastBar.high) {
            lastBar.high = newData.price;
        }

        lastBar.volume += newData.volume;
        lastBar.close = newData.price;
        updatedBar = lastBar;
    }

    return updatedBar;
}

export function searchSymbolsFromStream(symbolName, next) {
    socket.emit("searchSymbol", symbolName);
    socket.on("resSearchSymbol", (data) => {
        next(data);
    })
}

export function getDataSymbolHistoryFromStream(qrsearch, next) {
    socket.emit("getHistorySymbol", qrsearch);
    socket.on("resHistorySymbol", (data) => {
        next(data);
    })
}
export function defaultGetSymbolShistory(symbolName, next) {
    socket.emit("activeDataHistory", symbolName)
    socket.on("resHistorySymbol", (data) => {
        next(data);
    })
}