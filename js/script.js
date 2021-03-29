document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const form = document.querySelector('form');

  const regExpName = /^[А-Яа-яЁё\s]{2,15}$/;
  const regExpPhone = /^8\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;
  let inputName = document.querySelector('#inputname');
  let inputPhone = document.querySelector('#inputphone');

  const validateElem = (elem) => {
    if(elem.name === 'username') {
      if(!regExpName.test(elem.value) && elem.value != '') {
        elem.nextElementSibling.textContent = 'Введите коpректное имя';
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }

    if(elem.name === 'userphone') {
      if(!regExpPhone.test(elem.value) && elem.value != '') {
        elem.nextElementSibling.textContent = 'Введите коpректный номер 8 (xxx) xxx-xx-xx';
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }

    if(elem.name === 'username') {
      if(!regExpName.test(elem.value) && elem.value != '') {
        inputName.classList.add('name-error');
      } else {
        inputName.classList.remove('name-error');
      }
    }

    if(elem.name === 'userphone') {
      if(!regExpPhone.test(elem.value) && elem.value != '') {
        inputPhone.classList.add('phone-error');
      } else {
        inputPhone.classList.remove('phone-error');
      }
    } 
  };

  for( let elem of form.elements) {
    if(elem.tagName != 'BUTTON') {
      elem.addEventListener('blur', () => {
        validateElem(elem);
      });
    }
  }

  form.addEventListener('submit', (even) => {
    even.preventDefault();
    
    for( let elem of form.elements) {
      if(elem.tagName != 'BUTTON') {
        if(elem.value === '') {
          elem.nextElementSibling.textContent = 'Заполните поле';
        } else {
          elem.nextElementSibling.textContent = '';
        }
      }
    }
  });

  const buttons = document.querySelectorAll('button');
  const popup = document.querySelector('.popup');

  buttons.forEach((el) => {
    el.addEventListener('click', () => {
      buttons.currentTarget;
      popup.classList.add('popup-visible');
    });
  });

  popup.addEventListener('click', () => {
    popup.classList.remove('popup-visible');
  });

});
