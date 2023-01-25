document.addEventListener('DOMContentLoaded', function () {

	//------------------------img webp----------------------------

	function testWebP(callback) {

		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
			webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		}
		
		testWebP(function (support) {
			let className = support === true ? 'webp' : 'no-webp';
			document.documentElement.classList.add(className);
		}
	);
	

	//------------------------menu----------------------------

	if(window.innerWidth < 992) {
		const revealerNav = window.revealer({
			revealElementSelector: '.nav-js',
			options: {
			  anchorSelector: '.nav-btn-js',
			},
		 });

		 const actionBtn = document.querySelector('.nav-btn-js');
  
		 actionBtn.addEventListener('click', () => {
			if (!revealerNav.isRevealed()) {
			  revealerNav.reveal();
			  actionBtn.setAttribute('data-open', true);
			  $('.header__content').addClass('menu-show');
			} else {
			  revealerNav.hide();
			  actionBtn.setAttribute('data-open', false);
			  $('.header__content').removeClass('menu-show');
			}
		 });
	 
		$(window).scroll(function() {
		  if (actionBtn.dataset.open !== 'false') {
			 revealerNav.hide();
			 actionBtn.setAttribute('data-open', false);
			 $('.header__content').removeClass('menu-show');
		  }
		});
	}
	if(window.innerWidth > 992) {
		let colorRU = $('.links-colored_ru').css('background-color');
		let colorEN = $('.links-colored_en').css('background-color');

		$('.links-colored').mousemove(function(e) {
			if(e.target.closest('.links-colored_ru')) {
				$('.links-colored_ru').css('background-color', colorEN);
				$('.links-colored_en').css('background-color', colorRU);
			} else if (e.target.closest('.links-colored_en')){
				$('.links-colored_ru').css('background-color', colorRU);
				$('.links-colored_en').css('background-color', colorEN);
			}
		});
		$('.links-colored').mouseout(function() {
			if (!$('.links-colored__link').hasClass('active')) {
				$('.links-colored_ru').css('background-color', colorRU);
				$('.links-colored_en').css('background-color', colorEN);
			}
		});
	}

	//------------------------sliders----------------------------

	var swiper = new Swiper(".slider1", {
		slidesPerView: 6,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			},
			500: {
			  slidesPerView: 2,
			},
			700: {
			  slidesPerView: 3,
			},
			992: {
			  slidesPerView: 4,
			},
			1200: {
			  slidesPerView: 6,
			},
		 },
	});
	var swiper2 = new Swiper(".slider2", {
		spaceBetween: 10,
		autoHeight: true,
		speed: 1000,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
		mousewheel: {
			invert: true,
		 },
		 breakpoints: {
			320: {
				speed: 500,
			 },
			 500: {
				speed: 1000,
			 },
		 },
	});
});
