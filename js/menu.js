window.addEventListener('DOMContentLoaded', () => {
    let menuOpen = document.querySelector('.menu_open');
    let lanOpen = document.querySelector('.language_open');
    let menuLink = document.querySelector('.header_menu');
    
    const menuLinkOpen = document.querySelectorAll('.menu_link');

    menuOpen.addEventListener('click', () => {
        menuLink.classList.toggle("open_menu")
    });
    lanOpen.addEventListener('click', () => {
        menuLink.classList.toggle("open_menu")
    });
    menuLinkOpen.forEach(item => {
        item.addEventListener('click', () => {
            menuLink.classList.toggle("open_menu")
        })
    });
});