$(function(){
	var site = window.location.origin;
	var path = '/json/view_checker.json';
	var url = site + path;
	var colors = [];

	$.getJSON(url, function(data){
		Object.keys(data).forEach(function(value){
			colors.push(data[value]);
		});
		colors.push(false);
		colors = array_unique(colors);
	});

	$('.view-checker').on('click', function(){
		var scheme = $('body').attr('data-scheme') ? $('body').attr('data-scheme') : false;
		var scheme_index = colors.indexOf(scheme);
		var next = ((scheme_index + 1) == colors.length) ? 0 : (scheme_index + 1);
		$('body').attr('data-scheme', colors[next]);
	});
});