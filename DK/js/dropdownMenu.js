function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
window.onclick = function(event) {
    if (!event.target.matches('.plans__dropdown__dropbtn')) {
        let dropdowns = document.getElementsByClassName("plans__dropdown__content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}