var PromoZombieComponents = {
	component: {},
	_applyTemplate: function(template, settings) {
		var _tmp = template;
		var settingKeys = Object.keys(settings.placeholders);
		for(var i=0; i < settingKeys.length; i++) {
			var key = settingKeys[i].toUpperCase();
			_tmp = _tmp.replace("__" + key + "__", settings.placeholders[settingKeys[i]]);
		}
		return _tmp;
	}
}
PromoZombieComponents.$ = document;