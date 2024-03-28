const channelToSubscription = new Map();
const socketdchart = io("https://tradingviewrealtime.vps.com.vn", {//io("https://dchart-socket.vndirect.com.vn/socket.io", {
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
    const jsonString = JSON.stringify({
        action: "join",
        list: symbolList
    });
    socketdchart.emit('regs', jsonString);
}

export function unsubscribeFromStreamps(subscriberUID) {
    const jsonString = JSON.stringify({
        action: "leave",
        list: subscriberUID
    });
    socketdchart.emit('regs', jsonString);
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
// https://chart.vps.com.vn/tv/?symbol=AAH&allowFullscreen=true&resolution=1D&lang=vi

socketdchart.on("stock", function (data) {
    let parsedData = data;
    try {
        parsedData = JSON.parse(data);
    } catch (error) { }
    if (parsedData.hasOwnProperty('t')) {
        let newData;
        newData = {
            symbol: parsedData.s,
            ts: Math.floor(parsedData.t),
            volume: parseFloat(parsedData.v),
            price: parseFloat(parsedData.c),
            Hight: parseFloat(parsedData.h),
            Low: parseFloat(parsedData.l),
            Open: parseFloat(parsedData.o),
            Close: parseFloat(parsedData.c),
        };

        const symbolList = "CHART." + parsedData.s;
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
    }
});
socketdchart.on("stockps", function (data) {
    let parsedData = data;
    try {
        parsedData = JSON.parse(data);
    } catch (error) { }
    if (parsedData.hasOwnProperty('t')) {
        let newData;
        newData = {
            symbol: parsedData.s,
            ts: Math.floor(parsedData.t),
            volume: parseFloat(parsedData.v),
            price: parseFloat(parsedData.c),
            Hight: parseFloat(parsedData.h),
            Low: parseFloat(parsedData.l),
            Open: parseFloat(parsedData.o),
            Close: parseFloat(parsedData.c),
        };

        const symbolList = "CHART." + parsedData.s;
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
    }
});