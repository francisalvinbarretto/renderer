PromoZombieComponents.Bar = (function() {
	var attributes = {
		id: 'PromoZombieBar',
		className: 'PromoZombieBar'
	};
	function build() {
		var el = PromoZombieComponents.$.createElement('div');
			el.id = attributes.id;
			el.className = attributes.className;
			el.innerHTML  = "ZombieWorld";
		return el;
	}
	return{
		build: function() {
			return build();
		}
	}
})();