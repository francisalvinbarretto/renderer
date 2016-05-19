PromoZombie.Defaults = (function() {
	var baseUrl = "http://localhost:3000";
	var appname = "PromoZombie";
	return{
		appName: appname,
		_baseUrl: baseUrl,
		bar: {
			css: baseUrl + "/promozombie.css"
		}
	}
})();