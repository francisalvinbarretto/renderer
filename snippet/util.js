PromoZombie.Util = {
	onDomReady: function(callback){
		if(document.readyState == 'complete' || document.readyState == 'interactive'){
		  callback();
		}else{
		  document.addEventListener('DOMContentLoaded', callback);
		}
	},
	insertScript: function(src){
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.src = src;
		head.appendChild(script);
	},
	insertStyle: function(href){
		var linkCss = document.createElement('link');
		linkCss.setAttribute('rel', 'stylesheet');
		linkCss.setAttribute('href', href);
		document.getElementsByTagName("head")[0].appendChild(linkCss);
	},
	addClass: function(className) {
		if(typeof this !== 'object') {
			return;
		}

		var el = this;
		var classNames = el.className.split(" ");
		classNames.push(className);
		el.className = classNames.join(" ");
	},
	removeClass: function(className) {
		var el = this;
		var classNames = el.className.split(" ");
		var new_class_names =  classNames.filter(function(_classname) {
			if(_classname !== className) {
				return _classname;
			}
		});

		el.className = new_class_names.join(" ");
	},
	setDefaults: function(obj, source){
		for (var prop in source) {
			if (obj[prop] === void 0){
				obj[prop] = source[prop];
			}
		}
		
		return obj;
	}
}