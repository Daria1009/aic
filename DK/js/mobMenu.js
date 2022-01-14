window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu_item');
    const linkLogo = document.querySelector('.link_logo');
    
    const toggleMenu = function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    linkLogo.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('menu_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    });

    document.addEventListener('click', function(e) {
        const target = e.target;
        const its_menu = target == menu || menu.contains(target);
        const its_hamburger = target == hamburger;
        const menu_is_active = menu.classList.contains('menu_active');
        const hamburger_is_active = hamburger.classList.contains('hamburger_active');
        
        if (!its_menu && !its_hamburger && menu_is_active && hamburger_is_active) {
            toggleMenu();
        }
    });
})