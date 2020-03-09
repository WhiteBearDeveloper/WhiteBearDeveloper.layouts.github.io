$(function(){
	$('.modal-request').on('click', function() {
		openModal($(this));
	});
});

function shadowShow(){
	$('.window__shadow').addClass('window__shadow-show');
}
function shadowHide(){
	$('.window__shadow').removeClass('window__shadow-show');
}
function checkDevice(){
	var size = document.body.clientWidth;
	var device = false;
	if(size < 768){
		device = 'mobile';
	} else if(size >= 768 && size < 992){
		device = 'tablet';
	} else if(size >= 992){
		device = 'pc';
	}
	return device;
}

function array_unique(array){
	return array.filter(function(el, index, arr) {
		return index == arr.indexOf(el);
	});
}

function openModal(obj) {
	if (obj.attr('data-href')) {
		if ($('.modal-window').length == 0) {
			$('body').append('<div class="modal-window"></div>');
		}
		var sourceFrm = obj.attr('data-source');
		var href = obj.attr('data-href') + '?sourceForm=' + sourceFrm;
		var modal_window = $('.modal-window');
		modal_window.iziModal({
			borderBottom: false,
			width: 470,
			padding: 30,
			radius: 15,
			onOpening: function(modal) {
				modal.startLoading();
				$.get(href, function(data) {
					var content_block = modal_window.find('.iziModal-content');
					content_block.html(data);
					content_block.append('<div class="modal-window__close" data-izimodal-close></div>');
					modal.stopLoading();
				});
			},
			onClosed: function() {
				modal_window.iziModal('destroy');
				modal_window.html('');
			},
		});
		modal_window.iziModal('open');
	}
};