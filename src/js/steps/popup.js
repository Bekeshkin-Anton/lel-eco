// const body = document.querySelector('body');
// const popup = document.getElementById('popup');
// const popupOpenBtn = document.getElementById('popup-open-btn');
// const popupOpenBtn2 = document.getElementById('popup-open-btn2');
// const popupCloseBtn = document.getElementById('close-btn');

// // Показ окна
// popup.style.display = 'none';

// popupOpenBtn.addEventListener('click', () => {
//   popup.style.display = 'flex';
//   body.style.overflowY = 'hidden';
// });
// popupOpenBtn2.addEventListener('click', () => {
//   popup.style.display = 'flex';
//   body.style.overflowY = 'hidden';
// });

// popupCloseBtn.addEventListener('click', () => {
//   popup.style.display = 'none';
//   body.style.overflowY = 'scroll';
// });

// Отправка формы
// popup.addEventListener('submit', popupFormSend);
// async function popupFormSend(e) {
//   e.preventDefault();

//   let error = popupFormValidate(popup);
// }
// function popupFormValidate(popup) {
//   let error = 0;
//   let popupFormReq = document.getElementById('_popup-req');

//   for (let i = 0; i < popupFormReq.clientHeight; i++) {
//     const input = popupFormReq[i];
//     // if(input.classList.contains('_email'))
//   }
// }
// function popupFormAddError(input) {
//   input.parentElement.classList.add('_error');
//   input.classList.add('_error');
// }
// function popupFormRemoveError(input) {
//   input.parentElement.classList.remove('_error');
//   input.classList.remove('_error');
// }
