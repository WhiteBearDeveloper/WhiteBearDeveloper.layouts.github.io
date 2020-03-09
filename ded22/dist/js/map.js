$(function(){
	ymaps.ready(init);
	function init(){
		var site = window.location.href;
		var path = 'images/placemark.png';
		var icon = site + path;
		var placemark = {};
		placemark.width = 57;
		placemark.height = 74;
		var myMap = new ymaps.Map("map", {
			center: [53.330655, 83.794868],
			zoom: 16,
			controls: []
		}),
		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Сказочный край',
			balloonContent: 'Сказочный край'
		}, {
			iconLayout: 'default#image',
			iconImageHref: icon,
			iconImageSize: [placemark.width, placemark.height],
			iconImageOffset: [-placemark.width/2, -placemark.height]
		});
		myMap.geoObjects.add(myPlacemark);
	}
});