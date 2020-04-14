var Site = {
	init: function() {
		Site.menu()
		Site.smoothScroll()
	},
	menu: function() {
		$(".menu-toggle").on("click", function(e) {
			$(".hamburger").toggleClass("is-active");
			$('body').toggleClass('menu-open');
		});
	},
	smoothScroll: function() {
		$('a[href*="#"]')
			// Remove links that don't actually link to anything
			.not('[href="#"]')
			.not('[href="#0"]')
			.click(function(event) {
				// On-page links
				if (
					location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
					&&
					location.hostname == this.hostname
				) {
					// Figure out element to scroll to
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					// Does a scroll target exist?
					if (target.length) {
						// Only prevent default if animation is actually gonna happen
						event.preventDefault();
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000);
					}
				}
			});
	}
}


Site.init()
$(document).foundation()