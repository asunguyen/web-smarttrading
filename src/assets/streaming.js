
const { io } = require("socket.io-client");
const socket = io("https://api.smtchart.vn", { 
    'transports': ["websocket", "polling"] ,
    'query': {
        'symbol': "VNINDEX"
    }
});
socket.on("onData", (data) => {
    let dataBar = data.chart;
    if (data.infos.type == "stock" && data.infos.country == "VN") {
        return;
    }
    try {
        const newData = {
            symbol: dataBar.symbol,
            ts: Math.floor(dataBar.time),
            volume: dataBar.volume,
            price: dataBar.close,
            Hight: dataBar.max,
            Low: dataBar.min,
            Open: dataBar.open,
            Close: dataBar.close,

        };
        const symbolList = "CHART." + dataBar.symbol;
        const subscriptionItem = channelToSubscription.get(symbolList);
        if (subscriptionItem === undefined) {
            return;
        }
        const lastDailyBar = subscriptionItem ? subscriptionItem.lastDailyBar : null;
        var lastBar = lastDailyBar;
        var lastBarTimestamp = Math.floor(lastBar.time / 1000);
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
        if (isNewBar || (roundedTimestamp > lastBarTimestamp) ) {
            upBar = {
                symbol: lastDailyBar.symbol,
                resolution: subscriptionItem.resolution,
                time: roundedTimestamp * 1000,
                open: newData.price,
                high: newData.price,
                low: newData.price,
                close: newData.price,
                volume: newData.volume,
            };
        }
        else {
            upBar = {
                ...lastDailyBar,
                high: Math.max(lastDailyBar.high, bar.high),
                low: Math.min(lastDailyBar.low, bar.low),
                close: newData.price,
                volume: newData.volume,
            };
        }
        console.log("upbar:: ", upBar);
        
        subscriptionItem.lastDailyBar = upBar;
        // Send data to every subscriber of that symbol
        subscriptionItem.handlers.forEach(handler => handler.callback(upBar));
    } catch (err) {
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
    socket.emit('changeSymbol', { symbolInfo: symbolInfo });
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
    const lastBarTimestamp = Math.floor(lastBar.time / 1000);

    let updatedBar = false;
    if (isNewBar || roundedTimestamp > lastBarTimestamp) {
        updatedBar = {
            symbol: subscriber.symbol,
            resolution: subscriber.resolution,
            time: roundedTimestamp * 1000,
            open: isNewBar ? newData.Open : lastBar.close,
            high: isNewBar ? newData.Hight : lastBar.close,
            low: isNewBar ? newData.Low : lastBar.close,
            close: isNewBar ? newData.Close: lastBar.close,
            volume: newData.volume
        };
    } else {
        if (newData.price < lastBar.low) {
            lastBar.low = newData.price;
        } 
        if (newData.price > lastBar.high) {
            lastBar.high = newData.price;
        }
        lastBar.volume = newData.volume;
        //lastBar.close = newData.price;
        updatedBar = lastBar;
    }
    return updatedBar;
}



