window.addEventListener('DOMContentLoaded', () => {
    let history = document.querySelector('.information_content_history');
    let structure = document.querySelector('.information_content_structure');
    let receipt = document.querySelector('.information_content_receipt');

    document.querySelector('.btn_history').addEventListener('click', () => {
        history.style.display = "block";
        structure.style.display = "none";
        receipt.style.display = "none";
    });
    document.querySelector('.btn_structure').addEventListener('click', () => {
        structure.style.display = "block";
        history.style.display = "none";
        receipt.style.display = "none";
    });
    document.querySelector('.btn_receipt').addEventListener('click', () => {
        receipt.style.display = "block";
        structure.style.display = "none";
        history.style.display = "none";
    });
});