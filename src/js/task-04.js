
let counterValue = 0;
const buttonDecrEl = document.querySelector('[data-action="decrement"]');
const buttonIncrEl = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value');

buttonDecrEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})

buttonIncrEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})
