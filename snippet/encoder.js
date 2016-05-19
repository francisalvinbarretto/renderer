PromoZombie.Encoder ={
	toParams: function(object) {
		if(typeof object !== 'object') {
			throw new Error('Encoder: must be of type object (JSON)');
		}
		var encodedParams = [];
		for(var prop in object) {
			if(object.hasOwnProperty(prop)) {
				encodedParams.push(encodeURI(prop + '=' + object[prop]));
			}
		}
		return encodedParams.join("&");
	},

	export: function(response) {
		if(typeof this.type === 'string' && this.type === 'json') {
			return JSON.parse(response);
		}else {
			return response;
		}
	}
}