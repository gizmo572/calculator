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
            if (num2 === 0) {
                document.querySelector('.hidden').classList.add('nonono');
                return num1.toString();
            }
            output = divide(num1, num2);
            break;
        default:
            return;
    }
    return output.toString();
}

function updateDisplay() {
    document.querySelector('.curr').innerHTML = num2;
    document.querySelector('.prev').innerHTML = num1 + ' ' + operator;

}

function numClick(num) {
    if (num === '.' && num2.includes('.')) return;
    num2 += num;
    document.querySelector('.curr').innerHTML = num2;
}

function opClick(op) {
    if (num1 && num2) {
        num1 = operate(operator, parseFloat(num1), parseFloat(num2));
        console.log(num1)
    } else if (operator && !operator.includes('=')) {
        operator = op;
        updateDisplay();
        return;
    } else {
        num1 = num2;
    }

    num2 = '';
    operator = op;
    updateDisplay();
}

function backspace() {
    if (!num2) return;
    num2 = num2.slice(0,-1);
    updateDisplay();
}

function equals() {
    if (!(num1 && num2)) return;
    let temp = `${num1} ${operator} ${num2} =`
    num2 = operate(operator, parseFloat(num1), parseFloat(num2));
    num1 = '';
    operator = temp;
    updateDisplay();
}

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    updateDisplay();
}

let num1 = '';
let num2 = '';
let operator = '';


document.querySelectorAll('.nums').forEach(num => {
    num.addEventListener('click', () => { numClick(num.innerHTML) })
})

document.querySelectorAll('.operators').forEach(op => {
    op.addEventListener('click', () => opClick(op.innerHTML))
})

document.querySelector('.equals').addEventListener('click', equals)

document.querySelector('.clear').addEventListener('click', clear)

document.querySelector('.delete').addEventListener('click', backspace)

document.querySelector('.hidden').addEventListener('click', () => {
    document.querySelector('.hidden').classList.remove('nonono');
})

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key.match(/[0-9.]/)) numClick(e.key);
    if (e.key.match(/[*/+-]/)) opClick(e.key);
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Enter') equals();
    if (e.key === '`') clear();
})