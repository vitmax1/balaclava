		$(document).ready(function () {
			$('.rooms-single').slick({
			  slidesToShow: 1,
				slidesToScroll: 1,
			 	arrows: false,
				fade: true,
				asNavFor: '.rooms-nav'
			});
			$('.rooms-nav').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.rooms-single',
				dots: false,
				arrows: true,
				focusOnSelect: true,
				prevArrow: $('.left-arrow'),
				nextArrow: $('.right-arrow')
			});
		});
