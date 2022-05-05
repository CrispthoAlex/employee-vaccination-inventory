/*
	This file was coding in Vanilla JS
	This helper it can be used in differents frameworks

*/
export const helpHttp = () => {
  /*
    CRUD with REST architecture.
  	This function is a "Closure". It haves different functions and
	  local variables (enviroment).
  */
  /**
   * customFetch - private method to do request (GET,POST,PUT,DELETE)
   * @param {endpoint} Path to get data
   * @param {options} options that receives the endpoint {GET, POST, PUT, DELETE}
   * @returns 
   */
	const customFetch = (endpoint, options) => {
		const defaultHeader = {
			accept: "application/json"
		};

		// Object to stop when the endpoint/server doesn't respond
		const controller = new AbortController();
		// Error Manage
    	options.signal = controller.signal;

		// If the method isn't define, so "GET" save us
		options.method = options.method || "GET";
		// If the User does not define "headers" so "defaultHeader"
		options.headers = options.headers ?
			{...defaultHeader, ...options.headers} :
			defaultHeader ;

		// Send as a String to the backend
		options.body = JSON.stringify(options.body) || false;
		
		// If body is false. so delete. Generally, GET request.
		if (!options.body) delete options.body;
		
		// TEST
		console.log('Options object', options);

		// When the time is over, abort.
		setTimeout(() => controller.abort(), 3000);

		// Return a promise
		return fetch(endpoint, options)
			.then((res) => res.ok ? res.json():
				Promise.reject({
				err:true,
				status: res.status || "00",
				statusText: res.statusText || "An Error has occured",
				})
			)
			.catch((err) => err);
	};
  // GET method
	const get = (url, options = {}) => customFetch(url, options);
  // POST method
	const post = (url, options = {}) => {
		options.method = "POST";
		return customFetch(url, options);
	};
  // PUT method
	const put = (url, options = {}) => {
		options.method = "PUT";
		return customFetch(url, options);
	};
  // DELETE method
	const del = (url, options = {}) => {
		options.method = "DELETE";
		return customFetch(url, options);
	};

	return {
			get,
			post,
			put,
			del,
	};
}

