
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
        var upBar;
        if (isNewBar || roundedTimestamp > lastBarTimestamp) {
            upBar = {
                symbol: newData.symbol,
                resolution: subscriptionItem.resolution,
                time: newData.ts*1000,
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
                high: Math.max(lastDailyBar.high, newData.price),
                low: Math.min(lastDailyBar.low, newData.price),
                close: newData.price,
                volume: newData.volume,
                time: newData.ts*1000
            };
        }
        
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
    symbolInfo.resolution = resolution;
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



