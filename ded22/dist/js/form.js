$(function(){
	$('.form__field').on(
		'blur', function(){
			if($(this).hasClass('form__email')){
				checkEmail($(this));
			}
			if(!$(this).hasClass('form__phone')){
				checkLabel($(this));
			}
			$('.form__inputtext').removeClass('form__inputtext-focused');
		}).on(
		'focus', function(){
			showLabel($(this));
			$(this).parents('.form__inputtext').addClass('form__inputtext-focused');
		}
	);
	$(".form__phone").mask('+7-999-999-99-99').on('blur.mask', function ()
	{
		checkLabel($(this));
	});

	$('.form').on('submit', function(){
		var form = $(this);
		var form_fields = form.find('.form__field');
		if(form_fields.length > 0){
			var fields_count = form_fields.length;
			var cnt = 0;
			form_fields.each(function(){
				var field = $(this);
				if(checkEmptyVal(field)){
					cnt++;
				} else {
					return true;
				}
			});
			if(cnt == fields_count){
				if($('.form__errorblock-all').length == 0){
					$('.form__group').before("<div class='form__errorblock form__errorblock-all'>Хотя бы одно поле должно быть заполнено!</div>")
				}
			}
		}
		return false;
	});
});

function checkEmail(obj){
	var email = obj.val();
	var inputtext = obj.parents('.form__inputtext');
	if (email.length > 0
		&& (email.match(/.+?\@.+/g) || []).length !== 1) {
		inputtext.addClass("form__inputtext-error");
		inputtext.siblings('.form__errorblock').text('Вы ввели некорректный e-mail!').slideDown();
	} else {
		inputtext.removeClass('form__inputtext-error');
		inputtext.siblings('.form__errorblock').text('').slideUp();
	}
}

function checkLabel(obj){
	if(checkEmptyVal(obj)){
		showLabel(obj);
	} else {
		hideLabel(obj);
	}
}

function hideLabel(obj){
	obj.siblings('.form__label').addClass('form__label-hide');
}

function showLabel(obj){
	obj.siblings('.form__label').removeClass('form__label-hide');
}

function checkEmptyVal(obj)
{
	if(obj.val() == ''){
		return true;
	}
}