PromoZombieComponents.component.embeddedComponent = (function() {
	var _text;
	var template = [
		"<div class='pz-embedded-component'>",
			"<div class='pz-headline'>__HEADLINE__</div>",
			"<a class='pz-button' id='pzButtonOpenOverlay' href='__BUTTONURL__'>__BUTTONLABEL__</a>",
		"</div>",
		"<div id='PromoZombieOverlay'>",
			"<div class='pz-modal-content'>",
				"<a href='javascript: void(0);' id='pzButtonCloseOverlay' class='pz-modal-close'>X</a>",
				"<div class='pz-content-wrapper'>__EMBEDCODE__</div>",
			"</div>",
		"</div>"
	].join("");
	return{
		build: function(settings) {
			return {
				el: PromoZombieComponents._applyTemplate(template, settings),
				listeners: [
					function() {
						console.log('I was executed:, yay!!!');
						var overlayContainer = PromoZombieComponents.$.getElementById("PromoZombieOverlay");
						var btn = PromoZombieComponents.$.getElementById("pzButtonOpenOverlay");
						var btnClose = PromoZombieComponents.$.getElementById("pzButtonCloseOverlay");

						btn.addEventListener('click', function(evt) {
							evt.preventDefault();
							PromoZombie.Util.addClass.call(overlayContainer, "pz-overlay-active");
						});

						btnClose.addEventListener('click', function(evt) {
							evt.preventDefault();
							PromoZombie.Util.removeClass.call(overlayContainer, "pz-overlay-active");
						});
					}
				]
			}
		}
	}
})();