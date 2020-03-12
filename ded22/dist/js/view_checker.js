$(function(){
	var template_colors = [
		'black',
		'white',
		false
	];

	$('.view-checker').on('click', function(){
		var scheme = $('body').attr('data-scheme') ? $('body').attr('data-scheme') : false;
		var scheme_index = template_colors.indexOf(scheme);
		var next = ((scheme_index + 1) == template_colors.length) ? 0 : (scheme_index + 1);
		$('body').attr('data-scheme', template_colors[next]);
	});
});