ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [59.932703, 30.298180],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				balloonContent: 'Местоположение Среды'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'img/favicon.svg',
				// Размеры метки.
				iconImageSize: [45, 45],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38]
			});


    myMap.geoObjects
        .add(myPlacemark);
}
