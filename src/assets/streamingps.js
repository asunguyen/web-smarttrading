const channelToSubscription = new Map();
const socketdchart = io("https://dchart-socket.vndirect.com.vn/socket.io", {
    'transports': ["websocket", "polling"],
    'query': {
        'symbol': "VNINDEX"
    }
});

socketdchart.on('connect', () => {
    console.log('[socket] Connected');
    socketdchart.emit("addsymbol", "VNINDEX")
});

socketdchart.on('disconnect', (reason) => {
    console.log('[socket] Disconnected:', reason);
});

socketdchart.on('error', (error) => {
    console.log('[socket] Error:', error);
});

socketdchart.on('price', data => {
    let parsedData = data;
    try {
        parsedData = JSON.parse(data);
    } catch (error) { }
    let newData;
    newData = {
        symbol: parsedData.symbol,
        ts: Math.floor(parsedData.time / 1000),
        volume: parseFloat(parsedData.volume),
        price: parseFloat(parsedData.price),
        Hight: parseFloat(parsedData.price),
        Low: parseFloat(parsedData.price),
        Open: parseFloat(parsedData.price),
        Close: parseFloat(parsedData.price),
    };

    const symbolList = "CHART." + parsedData.symbol;
    const subscriptionItem = channelToSubscription.get(symbolList);
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;
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

    if (isNewBar || ((roundedTimestamp > lastBarTimestamp && resolution < 1440) ) ) {
        upBar = {
            ...lastDailyBar,
            symbol: lastDailyBar.symbol,
            resolution: subscriptionItem.resolution,
            time: roundedTimestamp * 1000,
            open: isNewBar ? newData.Open : lastBar.close,
            high: newData.Hight,
            low: newData.Low,
            close: newData.price,
            volume: newData.volume
        };
    }
    else {
        upBar = {
            ...lastDailyBar,
            high: Math.max(lastDailyBar.high, bar.high),
            low: Math.min(lastDailyBar.low, bar.low),
            close: newData.price,
            volume: newData.volume,
            time: bar.time,
        };
    }
    subscriptionItem.lastDailyBar = upBar;
    // Send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(upBar));
})




export function subscribeOnStreamps(
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
    socketdchart.emit('addsymbol', symbolInfo.name);
}

export function unsubscribeFromStreamps(subscriberUID) {
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
        } else if (newData.price > lastBar.high) {
            lastBar.high = newData.price;
        }

        lastBar.volume += newData.volume;
        lastBar.close = newData.price;
        updatedBar = lastBar;
    }

    return updatedBar;
}