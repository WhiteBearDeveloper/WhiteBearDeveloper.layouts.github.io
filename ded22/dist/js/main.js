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
		var href = obj.attr('data-href');
		var modal_window = $(href);
		modal_window.iziModal({
			borderBottom: false,
			width: 470,
			padding: 30,
			radius: 15,
			onClosed: function() {
				modal_window.iziModal('destroy');
			},
		});
		modal_window.iziModal('open');
	}
};