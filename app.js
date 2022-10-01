let displayValue;
let equation = [];

let calcDisplay = document.getElementById('input-display');
// calcDisplay.textContent = displayValue;

let calcButtons = document.getElementsByClassName('calc-button operator');

const numButtons = document.getElementById('buttons-container');

const add = function(a, b) {
    let sum = a + b;
    return sum;
}

const subtract = function(a, b) {
    let difference = a - b;
    return difference;
}

const multiply = function(a, b) {
    let product = a * b;
    return product;
}

const divide = function(a, b) {
    let remainder = a / b;
    return remainder;
}

const operator = function (op, a, b) {
    let operator = op;
    if (operator === '+'){
        displayValue = add(a, b);
    } else if (operator === '-'){
        displayValue = subtract(a, b);
    } else if (operator === '*'){
        displayValue = multiply(a, b);
    } else if (operator === "/") {
        displayValue = divide(a, b);
    } else {
        displayValue = console.log('Invalid input');
    }
    return displayValue;
};



operator('+', 10, 10);



numButtons.addEventListener('click', function(event) {
    calcDisplay.textContent = event.srcElement.textContent;
    equation.push(Number(event.srcElement.textContent))
    console.log(equation);
});