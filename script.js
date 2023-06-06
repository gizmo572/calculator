function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let output;
    switch (operator) {
        case '+':
            output = add(num1, num2);
            break;
        case '-':
            output = subtract(num1, num2);
            break;
        case '*':
            output = multiply(num1, num2);
            break;
        case '/':
            output = divide(num1, num2);
            break;
        default:
            return;
    }
    return output;
}

function updateDisplay() {
    document.querySelector('.curr').innerHTML = num2;
    document.querySelector('.prev').innerHTML = num1 + ' ' + operator;

}

let num1 = '';
let num2 = '';
let operator = '';


document.querySelectorAll('.nums').forEach(num => {
    num.addEventListener('click', () => {
        if (num.innerHTML === '.' && num2.includes('.')) return;
        num2 += num.innerHTML;
        document.querySelector('.curr').innerHTML = num2;
    })

})

document.querySelectorAll('.operators').forEach(op => {
    op.addEventListener('click', () => {
        console.log(num1, num2, operator)
        if (num1 && num2) {
            num1 = operate(operator, parseFloat(num1), parseFloat(num2));
            console.log(num1)
        } else if (operator) {
            operator = op.innerHTML;
            updateDisplay();
            return;
        } else {
            num1 = num2;
        }

        num2 = '';
        operator = op.innerHTML;
        updateDisplay();
    })
})

document.querySelector('.equals').addEventListener('click', () => {
    if (!(num1 && num2)) return;
    num2 = operate(operator, parseFloat(num1), parseFloat(num2));
    num1 = '';
    operator = '';
    updateDisplay();
})

document.querySelector('.clear').addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    updateDisplay();
})

document.querySelector('.delete').addEventListener('click', () => {
    if (!num2) return;
    num2 = num2.slice(0,-1);
    updateDisplay();
})