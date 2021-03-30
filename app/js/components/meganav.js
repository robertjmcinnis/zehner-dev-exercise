// COMPONENT: Mega Nav

$( document ).ready(function() {

	if ($(window).width() > 1023) {
		// Click the link to show the mega nav
		$('.header__mega-nav').on('mouseenter', function() {
			$('.mega-nav').addClass('is-active');
			$(this).addClass('is-active');
		});

		// Click the link again to toggle off the mega nav
		$('.mega-nav').on('mouseleave', function() {
			$('.mega-nav').removeClass('is-active');
			$(this).removeClass('is-active');
		});

		$('.mega-nav__tab-container').on('mouseenter', function() {
			$('.mega-nav__tab-container').removeClass('is-active');
			$(this).addClass('is-active');
		});

	}

	// Click anywhere outside of mega nav, to close mega nav
	$(document).on('click', function (e) {
		$('.mega-nav, .link--menu').on('click', function(e) {
		    e.stopPropagation();
		});

		if(!$(e.target).hasClass('mega-nav') && !$(e.target).hasClass('header__mega-nav') && !$(e.target).hasClass('link--menu')) {
			$('.mega-nav').removeClass('is-active');
			$('.link--mobile-menu').removeClass('is-open');
		}		
	});

	// Click on the mobile button to open nav
	$('.link--menu').on('click', function() {
		$('.link--mobile-menu').addClass('is-open');
		$('.mega-nav').addClass('is-active');
		$('body').addClass('is-fixed');
	});

});

