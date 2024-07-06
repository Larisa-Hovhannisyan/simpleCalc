let result = document.querySelector('.result');
let checkCase = document.querySelectorAll('.case');
let deleteButton = document.querySelector('.delete');
let clearLast = document.querySelector('.clearLast');
let evalResult = document.querySelector('.evalResult');

function forClass(elem) {
    elem.classList.add('activeCase');
    setTimeout(() => elem.classList.remove('activeCase'),200)
}

window.onkeydown = e => {
    if(e.which >= 96 && e.which <= 105 || e.which >= 48 && e.which <= 59 || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        result.innerText == 0 ? result.innerText = e.key : result.innerText += e.key;
    }
    checkCase.forEach(item => {
        if(e.key == item.innerText) {
            forClass(item)
        }
    })
    if(e.key == 'Backspace') {
        result.innerText.length <= 1 ? result.innerText = 0 : result.innerText = result.innerText.slice(0,-1);
            forClass(clearLast)
    }
    if(e.key == 'Delete') {
        result.innerText = 0;
            forClass(deleteButton)
    }
    if(e.key == 'Enter') {
        result.innerText = eval(result.innerText);
            forClass(evalResult)
    }
}