const socket = io("wss://dchart-socket.vndirect.com.vn/socket.io", {
    'transports': ["websocket", "polling"],
    'query': {
      'symbol': "VN30F1M"
    }
  });
const socketTrading = io("wss://tradingviewrealtime.vps.com.vn/socket.io", {
    'transports': ["websocket", "polling"],
    'query': {
      'symbol': "VN30F1M"
    }
})
const channelToSubscription = new Map();

socket.on('connect', () => {
	console.log('[socket] Connected');
});

socket.on('disconnect', (reason) => {
	console.log('[socket] Disconnected:', reason);
});

socket.on('error', (error) => {
	console.log('[socket] Error:', error);
});

socket.on('price', data => {
	
	let parsedData = data;
	try {
        parsedData = JSON.parse(data);
    } catch (error) {}
    const newData = {
        symbol: parsedData.symbol,
        ts: Math.floor(parsedData.time / 1000),
        volume: parseFloat(parsedData.volume),
        price: parseFloat(parsedData.price)
    };

    console.log('[socket] Message:', parsedData);
	const symbolList = "CHART." + parsedData.symbol;
	const subscriptionItem = channelToSubscription.get(symbolList);
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
	if (subscriptionItem === undefined) {
		return;
	}
    
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
    else{
        upBar = {
            ...lastDailyBar,
            high: Math.max(lastDailyBar.high, bar.high),
            low: Math.min(lastDailyBar.low, bar.low),
            close: newData.price,
            volume: lastDailyBar.low +newData.volume,
            time: bar.time,
        };
    }
        

    
    
    subscriptionItem.lastDailyBar = upBar;
    //console.log('[socket] bar:', bar);
    // Send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(upBar));

});

// socket tradingview
socketTrading.on('connect', () => {
	console.log('[socket] Connected');
});

socketTrading.on('disconnect', (reason) => {
	console.log('[socket] Disconnected:', reason);
});

socketTrading.on('error', (error) => {
	console.log('[socket] Error:', error);
});

socketTrading.on('price', data => {
	
	let parsedData = data;
	try {
        parsedData = JSON.parse(data);
    } catch (error) {}
    const newData = {
        symbol: parsedData.symbol,
        ts: Math.floor(parsedData.time / 1000),
        volume: parseFloat(parsedData.volume),
        price: parseFloat(parsedData.price)
    };

    console.log('[socket] Message:', parsedData);
	const symbolList = "CHART." + parsedData.symbol;
	const subscriptionItem = channelToSubscription.get(symbolList);
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
	if (subscriptionItem === undefined) {
		return;
	}
    
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
    else{
        upBar = {
            ...lastDailyBar,
            high: Math.max(lastDailyBar.high, bar.high),
            low: Math.min(lastDailyBar.low, bar.low),
            close: newData.price,
            volume: lastDailyBar.low +newData.volume,
            time: bar.time,
        };
    }
        

    
    
    subscriptionItem.lastDailyBar = upBar;
    //console.log('[socket] bar:', bar);
    // Send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach(handler => handler.callback(upBar));

});

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
	const channelString = ["addsymbol",symbolInfo.name];
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
	console.log('[subscribeBars]: Subscribe to streaming. Channel:', symbolList);
	socket.emit('addsymbol', symbolInfo.name);
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