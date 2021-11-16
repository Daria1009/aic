ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [40.83, 35.11],
            zoom: 3
        }),
        myPlacemark = new ymaps.Placemark([39.901698, 116.391433], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "ОБЩЕСТВО РОССИЙСКО-КИТАЙСКОЙ ДРУЖБЫ",
        });
        myPlacemark1 = new ymaps.Placemark([23.106600, -82.372385], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "САНКТ-ПЕТЕРБУРГСКОЕ ОБЩЕСТВО ДРУЗЕЙ КУБЫ",
        });
        myPlacemark2 = new ymaps.Placemark([37.570705, 126.976937], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "ОБЩЕСТВО РОССИЙСКО-КОРЕЙСКОЙ ДРУЖБЫ",
        });
        myPlacemark3 = new ymaps.Placemark([50.193122, 37.617347], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "САНКТ-ПЕТЕРБУРГСКАЯ АССОЦИАЦИЯ КУЛЬТУРНОГО И ДЕЛОВОГО СОТРУДНИЧЕСТВА С ИТАЛИЕЙ",
        });
        myPlacemark4 = new ymaps.Placemark([31.777493, 35.205165], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "АССОЦИАЦИЯ СОТРУДНИЧЕСТВА «САНКТ-ПЕТЕРБУРГ-ИЗРАИЛЬ»",
        });
        myPlacemark5 = new ymaps.Placemark([35.682272, 139.753137], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "САНКТ-ПЕТЕРБУРГСКОЕ ОБЩЕСТВО ДРУЖБЫ «РОССИЯ – ЯПОНИЯ»",
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.geoObjects.add(myPlacemark5);
}