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

let num1 = ''
let num2 = ''
let operator

document.querySelectorAll('.nums').forEach(num => {
    num.addEventListener('click', () => {
        if (!operator) {
            num1 += num.innerHTML;
        } else num2 += num.innerHTML;
        console.log(num1, num2)
    })
})