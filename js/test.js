window.addEventListener('DOMContentLoaded', () => {
    let text1 = document.querySelector('.text_1');
    let text2 = document.querySelector('.text_2');
    let text3 = document.querySelector('.text_3');
    let text4 = document.querySelector('.text_4');
    let text5 = document.querySelector('.text_5');

    document.querySelector('.struc_btn_1').addEventListener('click', () => {
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "none";
    });
    document.querySelector('.struc_btn_2').addEventListener('click', () => {
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "none";
    });
    document.querySelector('.struc_btn_3').addEventListener('click', () => {
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "block";
        text4.style.display = "none";
        text5.style.display = "none";
    });
    document.querySelector('.struc_btn_4').addEventListener('click', () => {
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "block";
        text5.style.display = "none";
    });
    document.querySelector('.struc_btn_5').addEventListener('click', () => {
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "block";
    });
});