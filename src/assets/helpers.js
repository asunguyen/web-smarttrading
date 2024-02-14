// Makes requests to CryptoCompare API
import request from '@/utils/request'
export async function makeApiRequest(path) {
	try {
		const response = await fetch(`https://api.smtchart.vn/v1/data/${path}`, {mode: 'no-cors',});
		return response.json();
	} catch (error) {
		throw new Error(`CryptoCompare request error: ${error.status}`);
	}
}

// Generates a symbol ID from a pair of the coins
export async function GeSymbolType(path, symbol) {
	try {
		const response = await request({url: `https://api.smtchart.vn/v1/data/${path}?symbol=${symbol}`, method: 'get'}); //request({url: `https://api.smtchart.vn/v1/chart/${path}?symbolType=${type}`, method: 'get'});//fetch(`https://api.smtchart/v1/chart/${path}?symbolType=${type}`);
		return response ? response.data : [];
	} catch (error) {
		throw new Error(`CryptoCompare request error: ${error.status}`);
	}
}

// Returns all parts of the symbol
export function parseFullSymbol(fullSymbol) {
	const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/);
	if (!match) {
		return null;
	}

	return {
		exchange: match[1],
		fromSymbol: match[2],
		toSymbol: match[3],
	};
}
