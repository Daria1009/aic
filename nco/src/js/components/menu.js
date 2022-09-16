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
				openDropdown.classList.remove('active');
				button.classList.remove("active");
				body.classList.remove("lock");
			}
		}
	}
}