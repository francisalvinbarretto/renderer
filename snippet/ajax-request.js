/**
 * Doing native ajax request:
 * 
 * promozombieapp.ajaxRequest({ 
 *	method: 'GET',
 *  data: (mixed string|object),
 *  type: 'json', (defaults to url-encoded)
 *  url: 'http://www.google.com',
 *  success: function(response) {},
 *  failure: function(data, status) {}
 * })
 */
PromoZombie.ajaxRequest = function(options) {
	var _callbacks = {
		success: options.success || function(response){},
		failure: options.failure || function(data, status){}
	}
	
	var requestType = typeof options.type === 'string' ? options.type.toLowerCase() : null;
	var headers = options.headers || null;
	var url = options.url || null;
	var method = options.method || null;
	var data = options.data || null;

	if(typeof url !== 'string' || url === null) {
		throw new Error('promozombie-ajax: url should be a string containing a valid url');
	}

	var _request = function() {
		//allowed methods
		var methods = [ 'GET', 'POST' ];
		if(typeof method !== 'string') {
			throw new Error("Invalid Method **" + typeof(method) + ". Allowed methods: " + methods.join(", "));
		}

		if(methods.indexOf(method.toUpperCase()) === -1) {
			throw new Error("Invalid Method **" + method + "**. Allowed methods: " + methods.join(", "));
		}

		var xhr = new XMLHttpRequest();
		xhr.open(method.toUpperCase(), encodeURI(url));
		if(typeof headers === 'undefined' || headers === null) {
			switch(requestType) {
				case 'json':
					if(typeof data !== 'object') {
						throw new Error('promozombie-ajax: data should be an object: ' + typeof(data));
					}

					try{
						data = JSON.stringify(data);
					}catch(e) { 
						throw new Error('Invalid json data passed. Received: ' + typeof(data));
					}
				break;
				default: 
					xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					data = PromoZombie.Encoder.toParams(data);
			}
		}

		xhr.onload = function() {
			if(xhr.status === 200) {
				_callbacks.success.apply(xhr, [PromoZombie.Encoder.export.call({type: 'json' }, xhr.responseText)]);
			}else {
				_callbacks.failure.apply(xhr, [xhr.responseText, xhr.status]);
			}
		}
		xhr.send(data.toString());
	}

	_request();
}