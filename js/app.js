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
    let btnHistory = document.querySelector('.btn_history');
    let btnStructure = document.querySelector('.btn_structure');
    let btnReceipt = document.querySelector('.btn_receipt');

    // btnHistory.addEventListener('click', () => {
    //     history.style.display = "block";
    //     structure.style.display = "none";
    //     receipt.style.display = "none";
    // });
    // btnStructure.addEventListener('click', () => {
    //     history.style.display = "none";
    //     structure.style.display = "block";
    //     receipt.style.display = "none";
    // });
    // btnReceipt.addEventListener('click', () => {
    //     history.style.display = "none";
    //     structure.style.display = "none";
    //     receipt.style.display = "block";
    // });
});