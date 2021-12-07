'use strict'

//проверка загрузки документа
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    form.addEventListener('submit', formSend);

    //перехват отправки данных
    async function formSend(e) {
        e.preventDefault();
        let error = isFormValidate(form);
        if (error === 0) {
            const userInfo = {
                email: email.value.trim(),
                password: password.value.trim(),
            };
            console.log (userInfo);
            alert('Вы зарегистрированы!');
        }
    }

    // функция проверяющая валидность формы
    function isFormValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');
        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];

            if ((input.value.trim() === '') || (input.getAttribute("type") === "checkbox" && input.checked === false)) {
                formAddError(input, 'Поле обязательно для заполнения');
                error++;
            } 

            else if (input.classList.contains('_email')) {
                if (!isEmail(input.value.trim())) {
                    formAddError(email, 'Email невалидный');
                    error++;
                } else {
                    formRemoveError(email);
                }
            } 

            else if (input.classList.contains('_password')) {
                if (!isPassword(password.value.trim())) {
                    formAddError(password, 'Пароль должен содержать как минимум 8 символов');
                    error++;
                } else {
                    formRemoveError(password);
                }
            } 

            else formRemoveError(input);
        }
        return error;
    }

    // функция добавляющая класс error
    function formAddError(input, massage) {
        const formControl = input.parentElement;
        formControl.classList.add('_error');
        input.classList.add('_error');
        const small = formControl.querySelector('small');
	    small.innerText = massage;
    }

    // функция убирающая класс error
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
        const small = input.parentElement.querySelector('small');
	    small.innerText = '';
    }

    // функция проверяющая валидность e-mail
    function isEmail(input) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
    }

    // функция проверяющая длину пароля
    function isPassword(input) {
        if (input.length >= 8) return true;
    }
});
