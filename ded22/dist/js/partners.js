$(function() {
	$('.partners__list').slick({
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplaySpeed: 3000,
		speed: 500,
		appendArrows: $('.partners-slider__navigation'),
		prevArrow: '<svg class="slider__navigation-arrow slider__navigation-arrow-prev"><use xlink:href="#arrow"></use></svg>',
		nextArrow: '<svg class="slider__navigation-arrow slider__navigation-arrow-next"><use xlink:href="#arrow"></use></svg>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false,
				centerMode: false,
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				arrows: false,
				centerMode: false,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
				centerMode: false,
			}
		}, ],
	});
});