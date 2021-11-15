window.addEventListener('DOMContentLoaded', () => {
    $( "#tabs" ).tabs();
    $( "#nav" ).tabs();

    if($(window).width() > 992){
        $('a.link_desk').on("click", function(e) {
            e.preventDefault(); 
            location.hash = this.hash;
        });
    }
});