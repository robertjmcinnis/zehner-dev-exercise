(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// -------------------------------------
//   Libraries
// -------------------------------------
// TODO: Include libraries here jQuery, slick, etc...


// -------------------------------------
//   Components
// -------------------------------------
var reviews       = require('./components/reviews.js');
var accordion     = require('./components/accordion.js');
var meganav       = require('./components/meganav.js');
var instagram     = require('./components/instagram.js');
var logoCarousel  = require('./components/logo-carousel.js');







},{"./components/accordion.js":2,"./components/instagram.js":3,"./components/logo-carousel.js":4,"./components/meganav.js":5,"./components/reviews.js":6}],2:[function(require,module,exports){
// COMPONENT: Accordion

$( document ).ready(function() {
    // When any accordion title is clicked...
    $(".accordion__title").click(function() {
        const $accordion_wrapper = $(this).parent();
        const $accordion_content = $(this).parent().find(".accordion__content");
        const $accordion_open = "accordion--open";

        // If this accordion is already open
        if ($accordion_wrapper.hasClass($accordion_open)) {
              $accordion_content.slideUp();                     // Close the content.
              $accordion_wrapper.removeClass($accordion_open);  // Remove the accordionm--open class.
        }
        
        // If this accordion is not already open
        else {
              $accordion_content.slideDown();                 // Show this accordion's content.
              $accordion_wrapper.addClass($accordion_open);   // Add the accordion--open class.
        }
    });

});
},{}],3:[function(require,module,exports){
// COMPONENT: Instafeed

(function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'foodliners',
            'container': "#instagram__feed",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': false,
            'items': 7,
            'items_per_row': 1,
            'margin': 0,
            'lazy_load': true,
            'on_error': console.error
        });
    });
})(jQuery);
},{}],4:[function(require,module,exports){
// COMPONENT: Logo Carousel

	$('.logo-carousel ').slick({
		infinite: true,
		slidesToShow: 10,
		// autoplay: true,
		slidesToScroll: 1,
		dots: false,
		swipe: true,
		arrows: false,
		lazyLoad: 'ondemand',
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 5.1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3.1
		      }
		    }
		  ]
	});
},{}],5:[function(require,module,exports){
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


},{}],6:[function(require,module,exports){
// COMPONENT: Reviews

$( document ).ready(function() {

	$('.reviews').slick({
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		slidesToScroll: 1,
		dots: false,
		swipe: true,
		arrows: true,
		centerMode: true,
		lazyLoad: 'ondemand',
		nextArrow: '<button class="button button--review review__next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></button>',
		prevArrow: '<button class="button button--review review__prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg></button>'
	});

});
},{}]},{},[1]);
