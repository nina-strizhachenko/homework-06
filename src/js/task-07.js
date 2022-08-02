const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
spanText.classList.add('input-style');
spanText.style.fontSize = `${inputFontSize.value}px`;

function changesFontSize() {
    spanText.style.fontSize = `${inputFontSize.value}px`;
    return spanText.style.fontSize;
}
    
    inputFontSize.addEventListener('input', changesFontSize);