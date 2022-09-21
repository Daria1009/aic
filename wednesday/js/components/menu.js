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



// $(function() {
// 	const isMobile = $(window).width() <= 767;

	

// 	// Отступ от шапки
// 	// headerMargin()
// 	function headerMargin() {
// 		const $page = $('main')
// 		let margin = $('header').outerHeight()
// 		margin+= 100;
// 		if ($page.hasClass('main-page')) {
// 			$('header').addClass('grey');
// 		}

// 		$('main').css('margin-top', margin);
// 	}

// 	// Перенос логотипа и кнопки корзины в шапке в мобилке
// 	if (isMobile) {
// 		$('.header__logo-wrapper').appendTo($('.header'))
// 		$('.header__btn.basket-btn').clone(true).appendTo($('.header'))
// 		$('.header').addClass('mobPos');
// 		headerMarginMob()
// 		function headerMarginMob() {
// 			const $page = $('main')
// 			let margin = $('header').outerHeight()
// 			if ($page.hasClass('main-page')) {
// 				$('header').addClass('grey');
// 			}
	
// 			$('main').css('margin-top', margin);
// 		}
// 	}
	
// 	// Выпадающие меню шапки
// 	if (!isMobile) {
// 		// Desktop
// 		$('.nav__link ~ .submenu').hide()
		
// 		// Появление выпадающих меню
// 		$('.nav__link.complex').each( function() {
// 			$(this).parent().hover(function() {
// 				$('.submenu').stop(true, true)
// 				const $submenu = $(this).find('.submenu:first');
// 				if ($submenu.css('display') === 'none') {
// 					$submenu.fadeIn(200)
// 					$(this).find('.nav__link:first').addClass('active')
// 				}
// 			}, function() {
// 				$('.submenu').stop(true, true)
// 				const $submenu = $(this).find('.submenu:first');
// 				if ($submenu.css('display') !== 'none') {
// 					$submenu.fadeOut(200)
// 					$(this).find('.nav__link:first').removeClass('active')
// 				}
// 			})
// 		})

// 		// Sticky Header
// 		var lastScrollTop=0;
// 		$(window).on('scroll', function () {
// 			const $header = $('header');
// 			let headerHeight = $header.height();
// 			let curScrollTop = $(this).scrollTop();
// 			if (curScrollTop > (headerHeight)) {
// 				if (!$header.hasClass('sticky')) {
// 					$header.addClass('sticky');
// 					$header.find('.header__info-row').hide()
// 					headerMarginDes();
// 					function headerMarginDes() {
// 						const $page = $('main')
// 						if ($page.hasClass('main-page')) {
// 							$('header').addClass('grey');
// 						}
				
// 						$('main').css('margin-top', headerHeight);
// 					};
// 				}
// 				if(curScrollTop < lastScrollTop){
// 					$header.removeClass('hideHeader').addClass('showHeader');
// 				} else if ($header.hasClass('showHeader')){
// 					$header.removeClass('showHeader').addClass('hideHeader');
// 				}

// 			}
// 			else {
// 				$header.removeClass('sticky').find('.header__info-row').find('.header__btns-container').append($('.header__btns'));
// 				$header.find('.header__info-row').show();
// 				$header.removeClass('showHeader');
// 				$('main').css('margin-top', 0)
// 			}
// 			lastScrollTop = curScrollTop;
// 		});
// 	} else {
// 		// Mobile
// 		$('.nav__link.complex ~ .icon').on('click', function(e) {
// 			// e.preventDefault();

// 			const $link = $(this).siblings('.nav__link.complex')
// 			const $submenu = $link.find('~ .submenu'); 
// 			if ($link.hasClass('active')) {
// 				$submenu.fadeOut(200, function() {
// 					$link.removeClass('active')
// 					$submenu.find('.nav__link.complex').removeClass('active')
// 					$submenu.find('.submenu').css('display', 'none')
// 				})
// 			} else {
// 				$submenu.fadeIn(200)
// 				$submenu.css('display', 'flex')
// 				$link.addClass('active')
// 			}
// 		})

// 		$('.header__bg').on('click', function() {
// 			$('.header .burger-checkbox').prop('checked', false)
// 			$(this).hide()
// 		})

// 		$('.header .burger-checkbox').on('click', function() {
// 			if ($(this).is(':checked')) {
// 				$('.nav__link.active ~ .submenu').hide()
// 				$('.nav__link.active').removeClass('active')
// 				$('.header__bg').show()
// 			} else {
// 				$('.header__bg').hide()
// 			}
// 		})


// 		// Sticky Header Mobile
// 		let lastScrollTop = 0;
// 		$(window).on('scroll', function () {
// 			const $header = $('header');
// 			let curScrollTop = $(this).scrollTop();
// 			let headerHeight = $header.height();

// 				if (curScrollTop > (headerHeight)) {
// 					if (!$header.hasClass('sticky')) {
// 						$header.addClass('sticky');
// 					} 
// 					if(curScrollTop < lastScrollTop){
// 						$header.removeClass('hideHeader').addClass('showHeader');
// 					} else if ($header.hasClass('showHeader')){
// 						$header.removeClass('showHeader').addClass('hideHeader');
// 					}
// 				} else {
// 					$header.removeClass('sticky');
// 					$header.addClass('showHeader').removeClass('hideHeader');
// 				}
// 				lastScrollTop = curScrollTop;

// 		});
// 	}
// }
