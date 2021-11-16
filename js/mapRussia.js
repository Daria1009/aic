ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [58.83, 80.11],
            zoom: 4
        }),
        myPlacemark = new ymaps.Placemark([55.753220, 37.622513], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "МОСКОВСКОЕ СООБЩЕСТВО",
        });

    myMap.geoObjects.add(myPlacemark);
}