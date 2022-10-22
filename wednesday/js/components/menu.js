let button = document.querySelector(".burger");
let body = document.querySelector("body");

button.onclick = () => {
	document.getElementById("myDropdown").classList.toggle("active");
	button.classList.toggle("active");
	body.classList.toggle("lock");
}
// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
	if (!event.target.matches('.burger')) {
		var dropdowns = document.getElementsByClassName("menu");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('active')) {
				openDropdown.classList.toggle('active');
				button.classList.toggle("active");
				body.classList.toggle("lock");
			}
		}
	}
}

const $header = $('header');
let scrollPrev = 0;
let headerHeight = $header.height();

$(window).on('scroll', function () { 
	var scrolled = $(this).scrollTop();
 
	if ( scrolled > (headerHeight) && scrolled > scrollPrev ) {
		$header.addClass('out');
	} else {
		$header.removeClass('out');
	}
	scrollPrev = scrolled;
});