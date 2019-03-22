		$(document).ready(function () {
			$('.rooms-single').slick({
			  slidesToShow: 1,
				slidesToScroll: 1,
			 	arrows: false,
				fade: true,
				adaptiveHeight: true,
				asNavFor: '.rooms-nav'
			});
			$('.rooms-nav').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.rooms-single',
				dots: false,
				arrows: true,
				infinite: true,
				focusOnSelect: true,
				prevArrow: $('.left-arrow'),
				nextArrow: $('.right-arrow')
			});
		});

// $('.slider-for').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	fade: true,
// 	asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	asNavFor: '.slider-for',
// 	dots: false,
// 	focusOnSelect: true,
// 	arrows: true,
// 	prevArrow: $('.prev'),
// 	nextArrow: $('.next'),
// });