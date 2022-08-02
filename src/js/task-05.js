const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function onInput(event) {
    span.textContent = event.currentTarget.value
        ? event.currentTarget.value
        : "Anonymous";
    }
    
input.addEventListener('input', onInput);

