$(function() {
	$('.team__list').slick({
		swipeToSlide: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		speed: 500,
		centerMode: false,
		appendArrows: $('.team-slider__navigation'),
		prevArrow: '<svg class="slider__navigation-arrow slider__navigation-arrow-prev"><use xlink:href="#arrow"></use></svg>',
		nextArrow: '<svg class="slider__navigation-arrow slider__navigation-arrow-next"><use xlink:href="#arrow"></use></svg>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false,
				centerMode: true,
			}
		}, ],
	});
});