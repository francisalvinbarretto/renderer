PromoZombieComponents.component.textComponent = (function() {
	var _text;
	var template = [
		"<div class='pz-text-component'>",
			"<div class='pz-headline'>__HEADLINE__</div>",
			"<a class='pz-button' href='__BUTTONURL__' target='_blank'>__BUTTONLABEL__</a>",
		"</div>"
	].join("");
	
	return{
		build: function(settings) {
			return {
				el: PromoZombieComponents._applyTemplate(template, settings)
			};
		}
	} 
})();