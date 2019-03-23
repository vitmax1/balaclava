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

$(document).ready(function () {
	$('.bathhouse-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.bathhouse-nav'
	});

	$('.bathhouse-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.bathhouse-single',
		dots: false,
		arrows: true,
		focusOnSelect: true,
		prevArrow: $('.bathhouse-left-arrow'),
		nextArrow: $('.bathhouse-right-arrow')
	});
});