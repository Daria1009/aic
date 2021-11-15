window.addEventListener('DOMContentLoaded', () => {
    let receipt1 = document.querySelector('.receipt_1');
    let receipt2 = document.querySelector('.receipt_2');
    let receipt3 = document.querySelector('.receipt_3');
    let receipt4 = document.querySelector('.receipt_4');

    let contentReceipt = document.querySelector('.information_content_receipt');

    $('.receipt_btn_1').on("click", () => {
        contentReceipt.style.display = "none";
        receipt1.style.display = "block";
        receipt2.style.display = "none";
        receipt3.style.display = "none";
        receipt4.style.display = "none";
    });
    $('.receipt_btn_2').on("click", () => {
        contentReceipt.style.display = "none";
        receipt2.style.display = "block";
        receipt1.style.display = "none";
        receipt3.style.display = "none";
        receipt4.style.display = "none";
    });
    $('.receipt_btn_3').on("click", () => {
        contentReceipt.style.display = "none";
        receipt3.style.display = "block";
        receipt1.style.display = "none";
        receipt2.style.display = "none";
        receipt4.style.display = "none";
    });
    $('.receipt_btn_4').on("click", () => {
        contentReceipt.style.display = "none";
        receipt4.style.display = "block";
        receipt1.style.display = "none";
        receipt2.style.display = "none";
        receipt3.style.display = "none";
    });
    $('a.btn').on("click", () => {
        receipt4.style.display = "none";
        receipt1.style.display = "none";
        receipt2.style.display = "none";
        receipt3.style.display = "none";
    });
    $('a.btn_receipt').on("click", () => {
        contentReceipt.style.display = "block";
        receipt4.style.display = "none";
        receipt1.style.display = "none";
        receipt2.style.display = "none";
        receipt3.style.display = "none";
    });
});