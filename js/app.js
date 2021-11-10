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

    let history = document.querySelector('.information_content_history');
    let structure = document.querySelector('.information_content_structure');
    let receipt = document.querySelector('.information_content_receipt');

    document.getElementById('btn_1').addEventListener('click', () => {
        document.getElementById('content_1').style.display = "block";
        document.getElementById('content_2').style.display = "none";
        document.getElementById('content_3').style.display = "none";
    });
    document.getElementById('btn_2').addEventListener('click', () => {
        document.getElementById('content_1').style.display = "none";
        document.getElementById('content_2').style.display = "block";
        document.getElementById('content_3').style.display = "none";
    });
    document.getElementById('btn_3').addEventListener('click', () => {
        document.getElementById('content_1').style.display = "none";
        document.getElementById('content_2').style.display = "none";
        document.getElementById('content_3').style.display = "block";
    });
});