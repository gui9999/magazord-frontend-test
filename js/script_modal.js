// Scripts modal

// var
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// event
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// abrir
function openModal() {
    modal.style.display = 'block';
}

// fechar
function closeModal() {
    modal.style.display = 'none';
}

// fechar se clicar fora
function outsideClick(e) {
    if (e.target == modal) {
    modal.style.display = 'none';
    }
}

const modal_2 = document.querySelector('#my-modal_2');
const modalBtn_2 = document.querySelector('#modal-btn_2');
const closeBtn_2 = document.querySelector('.close_2');

// event
modalBtn_2.addEventListener('click', openModal_2);
closeBtn_2.addEventListener('click', closeModal_2);
window.addEventListener('click', outsideClick_2);

// abrir
function openModal_2() {
    modal_2.style.display = 'block';
}

// fechar
function closeModal_2() {
    modal_2.style.display = 'none';
}

// fechar se clicar fora
function outsideClick_2(e) {
    if (e.target == modal_2) {
    modal_2.style.display = 'none';
    }
}

// modal content select

document.querySelector('.select-field').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');

});
