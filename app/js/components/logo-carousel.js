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