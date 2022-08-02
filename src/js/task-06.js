const inputEl = document.querySelector('#validation-input');

function checkInput(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener('blur', checkInput);




