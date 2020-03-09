$(function() {
	var main_slider = $('.main-slider__list');
	main_slider.on('click', '.main-slider__modal-request', function() {
		openModal($(this));
	});
	main_slider.on('init', function() {
		$('.main-slider__list').addClass('main-slider__list-show');
	});
	main_slider.slick({
		swipeToSlide: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		dotsClass: 'slider__pagination',
		appendDots: $('.main-slider__pagination'),
		appendArrows: $('.main-slider__navigation'),
		prevArrow: '<svg class="slider__navigation-arrow slider__navigation-arrow-prev"><use xlink:href="#arrow"></use></svg>',
		nextArrow: '<svg class="slider__navigation-arrow slider__navigation-arrow-next"><use xlink:href="#arrow"></use></svg>',
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false,
			}
		}, ],
	});
});