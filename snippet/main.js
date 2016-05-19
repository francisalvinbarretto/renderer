var PromoZombie = {
	render: function(userConfig) {
		var config = PromoZombie.Util.setDefaults(userConfig, {});
		PromoZombie.Util.onDomReady(function() {
			if(typeof config.userKey != 'string') {
				throw new Error('PromoZombie: Invalid config. Hash required');
			}
			if(config.userKey.trim() === '') {
				throw new Error('PromoZombie: Invalid config. Hash required');
			}

			PromoZombie.ajaxRequest({
				url: PromoZombie.Defaults._baseUrl + "/api-zombie/user-config?hash=" + config.userKey,
				method: 'GET',
				success: function(response) {
					try{
						PromoZombie.Renderer.build(response);
					}catch(e) {
						console.error('PromoZombie: ', e.message);
						throw new Error(e.message);
					}
				},
				failure: function(response, status) {
					console.error('Error getting user settings: ', response, status);
				}
			});
		});
	}
}