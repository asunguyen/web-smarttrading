const channelToSubscription = new Map();
const socketdchart = io("https://dchart-socket.vndirect.com.vn/socket.io", {
    'transports': ["websocket", "polling"],
    'query': {
        'symbol': "VN30F1M"
    }
});

socketdchart.on('connect', () => {
    console.log('[socket] Connected');
    socketdchart.emit("addsymbol", "SSI")
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
    const newData = {
        symbol: parsedData.symbol,
        ts: Math.floor(parsedData.time / 1000),
        volume: parseFloat(parsedData.volume),
        price: parseFloat(parsedData.price)
    };

    console.log('[socket] Message:', parsedData);
    const symbolList = "CHART." + parsedData.symbol;
    const subscriptionItem = channelToSubscription.get(symbolList);
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;
    var lastBar = lastDailyBar;
    const isNewBar = JSON.stringify(lastBar) === '{}';

    let resolution = subscriptionItem.resolution;
    if (resolution.includes('D')) {
        resolution = 1440;
    } else if (resolution.includes('W')) {
        resolution = 10080;
    }

    const interval = resolution * 60;
    const roundedTimestamp = Math.floor(newData.ts / interval) * interval;

    console.log('[socket] newData:', newData);
    const bar = updateBar(newData, lastDailyBar, subscriptionItem);
    var upBar;

    if (isNewBar || roundedTimestamp > lastBarTimestamp) {
        upBar = {
            ...lastDailyBar,
            symbol: lastDailyBar.symbol,
            resolution: subscriptionItem.resolution,
            time: roundedTimestamp * 1000,
            open: newData.price,
            high: isNewBar ? newData.price : lastBar.close,
            low: isNewBar ? newData.price : lastBar.close,
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
            volume: lastDailyBar.low + newData.volume,
            time: bar.time,
        };
    }


    console.log("upBar")

    subscriptionItem.lastDailyBar = upBar;
    //console.log('[socket] bar:', bar);
    // Send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(upBar));
})


const socketUrl = "https://tradingviewrealtime.vps.com.vn";
const subscribers = [];
const socketSmart = io("https://tradingviewrealtime.vps.com.vn", { 
    'transports': ["websocket", "polling"] ,
    'query': {
        'symbol': "VN30F1M"
    }
});

socketSmart.on("connect", () => {
    console.log("VPS Socket connected");
    socketSmart.emit("regs", JSON.stringify({"action":"join","list":"CHART.VN30F1M"}))
});

socketSmart.on("disconnect", (reason) => {
    console.log("VPS Socket disconnected:", reason);
});

socketSmart.on("connect_error", (error) => {
    console.log("VPS Socket connect error", error);
});

socketSmart.on("error", (error) => {
    console.log("VPS Socket error", error);
});

socketSmart.on("stockps", function (data) {
    let parsedData = data;
    try {
        parsedData = JSON.parse(data);
    } catch (error) { }
    console.log("parsedData:: ", parsedData);
    if (parsedData.hasOwnProperty('t')) {
        const newData = {
            symbol: parsedData.s,
            ts: parsedData.t,
            volume: parseFloat(parsedData.lv),
            price: parseFloat(parsedData.c)
        };

        var subscriber = subscribers.find(sub => sub.symbol === parsedData.s);
        if (!subscriber && subscribers.length === 1) {
            subscriber = subscribers[0];
        }

        if (subscriber) {
            if (newData.ts < subscriber.lastBar.time / 1000) {
                return;
            }

            subscriber.lastBar = updateBar1(newData, subscriber);
            subscriber.lastBar.source = "VPS";

            // self.postMessage({
            //     type: "bar_updated",
            //     data: subscriber.lastBar
            // });
        }
    }
});

// self.onmessage = event => {
//     if (event.data) {
//         const eventData = event.data;
//         if (eventData.type === "subscribe") {
//             const newSubscriber = {
//                 id: eventData.id,
//                 symbol: eventData.symbol,
//                 resolution: eventData.resolution,
//                 lastBar: {}
//             };

//             subscribers.push(newSubscriber);
//             const symbolList = "CHART." + eventData.symbol;
//             const jsonString = JSON.stringify({
//                 action: "join",
//                 list: symbolList
//             });

//             socket.emit("regs", jsonString);
//         } else if (eventData.type === "unsubscribe") {
//             const index = subscribers.findIndex(sub => sub.id === eventData.id);
//             if (index >= 0) {
//                 subscribers.splice(index, 1);
//             }

//             const symbolList = "CHART." + eventData.symbol;
//             const jsonString = JSON.stringify({
//                 action: "leave",
//                 list: symbolList
//             });

//             socket.emit("regs", jsonString);
//         }
//     }
// };

function updateBar1(newData, subscriber) {
    const lastBar = subscriber.lastBar || {};
    const isNewBar = JSON.stringify(lastBar) === '{}';

    let resolution = subscriber.resolution;
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
            time: roundedTimestamp * 1000,
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