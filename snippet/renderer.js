PromoZombie.Renderer = (function() {

	var bar;

	function build() {
		var settings = PromoZombie.Encoder.export.call({type: 'json'}, this.settings);
		if(typeof settings !== 'object') {
			throw new Error('PromoZombie: Invalid user config settings');
		}

		bar = PromoZombieComponents.Bar.build();
		var innerContent = PromoZombie.Defaults.appName;
		if(PromoZombieComponents.component.hasOwnProperty(this.componentType)) {
			var innerContent = PromoZombieComponents.component[this.componentType].build(settings);
		}

		bar.innerHTML = innerContent.el;
		var script_contents = bar.getElementsByTagName("script");
		for(var i=0; i<script_contents.length; i++) {
			try{
				eval(script_contents[i].innerHTML);
			}catch(e) { console.log('error script: ', e.message); }
			
		}

		PromoZombieComponents.$.body.appendChild(bar);

		if(typeof innerContent.listeners === 'object') {
			for(var i=0; i<innerContent.listeners.length; i++) {
				innerContent.listeners[i].call();
			}
		}
	}

	function renderStyles() {
		var pzStyles = document.createElement("link");
		pzStyles.rel = "stylesheet";
		pzStyles.type = "text/css";
		pzStyles.href =  PromoZombie.Defaults.bar.css + "?ts=" + new Date().getTime();
		PromoZombieComponents.$.getElementsByTagName("head")[0].appendChild(pzStyles)
	}

	function pushClientBodyDown() {
		//push the body down by 40px
		PromoZombieComponents.$.body.style.marginTop = "40px";
	}

	return{
		build: function(component) {
			if(typeof component !== 'object') {
				throw new Error('PromoZombie: Invalid user config settings');
			}
			renderStyles();
			pushClientBodyDown();
			build.call(component);
		}
	}
})();