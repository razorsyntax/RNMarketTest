import axios from 'axios';

// Public/Private method names
const methods = {
	public: ['Time', 'Assets', 'AssetPairs', 'Ticker', 'Depth', 'Trades', 'Spread', 'OHLC'],
};

// Default options
const defaults = {
	url: 'https://api.kraken.com',
	version: 0,
	timeout: 5000,
};

// Send an API request
const rawRequest = async (url: string, headers: any, data: any, timeout: number) => {
	// Set custom User-Agent string
	headers['User-Agent'] = 'Kraken Javascript API Client';

	const options = { headers, timeout };

	Object.assign(options, {
		method: 'GET',
		body: JSON.stringify(data),
	});

	// Refactor
	const body: any | {} = await axios.get(url + '?pair=' + data.pair, options);
	const response = body.data.result;

	if (response.error && response.error.length) {
		const error = response.error
			.filter((e: any) => e.startsWith('E'))
			.map((e: any) => e.substr(1));

		if (!error.length) {
			throw new Error("Kraken API returned an unknown error");
		}

		throw new Error(error.join(', '));
	}

	return response;
};

let config: any;

/**
 * KrakenClient connects to the Kraken.com API
 * @param {String}        key               API Key
 * @param {String}        secret            API Secret
 * @param {String|Object} [options={}]      Additional options. If a string is passed, will default to just setting `options.otp`.
 * @param {String}        [options.otp]     Two-factor password (optional) (also, doesn't work)
 * @param {Number}        [options.timeout] Maximum timeout (in milliseconds) for all API-calls (passed to `request`)
 */
class KrakenClient {
	constructor(key: string, secret: string, options?: any) {

		// Allow passing the OTP as the third argument for backwards compatibility
		if (typeof options === 'string') {
			options = { otp: options };
		}

		config = Object.assign({ key, secret }, defaults, options);
	}

	/**
	 * This method makes a public or private API request.
	 * @param  {String}   method   The API method (public or private)
	 * @param  {Object}   params   Arguments to pass to the api call
	 * @param  {Function} callback A callback function to be executed when the request is complete
	 * @return {Object}            The request object
	 */
	api(method: string, params?: any, callback?: any) {
		// Default params to empty object
		if (typeof params === 'function') {
			callback = params;
			params = {};
		}

		if (methods.public.includes(method)) {
			return this.publicMethod(method, params, callback);
		}
		else {
			throw new Error(method + ' is not a valid API method.');
		}
	}

	/**
	 * This method makes a public API request.
	 * @param  {String}   method   The API method (public or private)
	 * @param  {Object}   params   Arguments to pass to the api call
	 * @param  {Function} callback A callback function to be executed when the request is complete
	 * @return {Object}            The request object
	 */
	publicMethod(method: string, params: any, callback: any) {
		params = params || {};

		// Default params to empty object
		if (typeof params === 'function') {
			callback = params;
			params = {};
		}

		const path = '/' + config.version + '/public/' + method;
		const url = config.url + path;
		const response = rawRequest(url, {}, params, config.timeout);

		if (typeof callback === 'function') {
			response
				.then((result) => callback(null, result))
				.catch((error) => callback(error, null));
		}

		return response;
	}
}

export default KrakenClient;