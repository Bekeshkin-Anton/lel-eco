// Показ окна
const body = document.querySelector('body');
const popup = document.getElementById('popup');
const popupOpenBtn = document.getElementById('popup-open-btn');
const popupOpenBtn2 = document.getElementById('popup-open-btn2');
const popupCloseBtn = document.getElementById('close-btn');

popup.style.display = 'none';

popupOpenBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  body.style.overflowY = 'hidden';
});
popupOpenBtn2.addEventListener('click', () => {
  popup.style.display = 'flex';
  body.style.overflowY = 'hidden';
});

popupCloseBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  body.style.overflowY = 'scroll';
  FormRemoveError(input);
});

// Валидация
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const form3 = document.getElementById('form-3');

form1.addEventListener('submit', firstFormSend);
async function firstFormSend(e) {
  e.preventDefault();

  let formData = new formData(form1);

  if (error === 0) {
    console.log('error = 0');
    form1.classList.add('_sending');
    // let response = await fetch('sendmail.php', {
    //   method: 'POST',
    //   body: formData,
    // });
    // if (response.ok) {
    //   let result = await resourse.JSON();
    //   form1.reset();
    // }
  }

  let error = firstFormValidate(form1);
}
function firstFormValidate(form1) {
  let error = 0;
  let FormReq = document.querySelectorAll('._req');

  for (let i = 0; i < FormReq.length; i++) {
    const input = FormReq[i];
    FormRemoveError(input);
    if (input.classList.contains('_tel')) {
      if (phoneTest(input)) {
        FormAddError(input);
        error++;
      }
      // } else if (input.classList.contains('_name')) {
      //   if (nameTest(input)) {
      //     FormAddError(input);
      //     error++;
      //   }
    } else if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        FormAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        FormAddError(input);
        error++;
      }
    }
  }
}
form2.addEventListener('submit', secondFormSend);
async function secondFormSend(e) {
  e.preventDefault();

  let error = secondFormValidate(form2);
}
function secondFormValidate(form2) {
  let error = 0;
  let FormReq = document.querySelectorAll('._req');

  for (let i = 0; i < FormReq.length; i++) {
    const input = FormReq[i];
    FormRemoveError(input);
    if (input.classList.contains('_tel')) {
      if (phoneTest(input)) {
        FormAddError(input);
        error++;
      }
      // } else if (input.classList.contains('_name')) {
      //   if (nameTest(input)) {
      //     FormAddError(input);
      //     error++;
      //   }
    } else if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        FormAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        FormAddError(input);
        error++;
      }
    }
  }
}
form3.addEventListener('submit', thirdFormSend);
async function thirdFormSend(e) {
  e.preventDefault();

  let error = thirdFormValidate(form3);
}
function thirdFormValidate(form3) {
  let error = 0;
  let FormReq = document.querySelectorAll('._req');

  for (let i = 0; i < FormReq.length; i++) {
    const input = FormReq[i];
    FormRemoveError(input);
    if (input.classList.contains('_tel')) {
      if (phoneTest(input)) {
        FormAddError(input);
        error++;
      }
      // } else if (input.classList.contains('_name')) {
      //   if (nameTest(input)) {
      //     FormAddError(input);
      //     error++;
      //   }
    } else if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        FormAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        FormAddError(input);
        error++;
      }
    }
  }
}
popupForm.addEventListener('submit', popupFormSend);
async function popupFormSend(e) {
  e.preventDefault();
  let error = popupFormValidate(popupForm);
}
function popupFormValidate(popupForm) {
  let error = 0;
  let FormReq = document.querySelectorAll('._req');

  for (let i = 0; i < FormReq.length; i++) {
    const input = FormReq[i];
    FormRemoveError(input);
    if (input.classList.contains('_tel')) {
      if (phoneTest(input)) {
        FormAddError(input);
        error++;
      }
      // } else if (input.classList.contains('_name')) {
      //   if (nameTest(input)) {
      //     FormAddError(input);
      //     error++;
      //   }
    } else if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        FormAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        FormAddError(input);
        error++;
      }
    }
  }
}
function FormAddError(input) {
  input.classList.add('_error');
}
function FormRemoveError(input) {
  input.classList.remove('_error');
}
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
function phoneTest(input) {
  // /[^0-9]/g, '';
  return !/^[0-9+]{10,12}$/.test(input.value);
}
// function nameTest(input) {
//   // /^[ \s]+|[ \s]+$/g;
//   return !/^[A-Za-zА-Яа-яЁё]$/.test(input.value);
// }
