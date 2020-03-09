$(function(){
	$('.menu__sandwich').on('click', function (e)
	{
		if($('.header').hasClass('header__show-menu')){
			hideMenu();
		} else {
			showMenu();
		}

		var firstClick = true;
		$(document).bind('touchstart.mobileMenu, click.mobileMenu', function(e) {
			if (!firstClick && $(e.target).closest('.header').length == 0) {
				hideMenu();
				$(document).unbind('touchstart.mobileMenu, click.mobileMenu');
			}
			firstClick = false;
		});
		e.preventDefault();
	});

	$(".menu__item").on("click", function(){
		var target = $(this).find('.menu__link').attr("href");
		var obj = $(target);
		var mobile = $('.header').hasClass('header__show-menu');
		if(obj.length > 0){
			if(mobile){
				hideMenu();
			}
			smoothScrolling(obj);
		}
		return false;
	});

	$(window).on('resize', function(){
		checkMenu();
	});
});

function showMenu(){
	$('.header').addClass('header__show-menu');
	if(checkDevice() != 'pc'){
		shadowShow();
	}
}
function hideMenu(){
	$('.header').removeClass('header__show-menu');
	shadowHide();
}
function checkMenu()
{
	var device = checkDevice();
	var showedMenu = $('.header').hasClass('header__show-menu');
	if(showedMenu && device != 'pc'){
		shadowShow();
	} else if(device == 'pc'){
		hideMenu();
	}
}
function smoothScrolling(obj){
	$('html,body').stop().animate(
		{
			scrollTop: obj.offset().top
		}, 1000);
}