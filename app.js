let answer;

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
        answer = add(a, b);
    } else if (operator === '-'){
        answer = subtract(a, b);
    } else if (operator === '*'){
        answer = multiply(a, b);
    } else if (operator === "/") {
        answer = divide(a, b);
    } else {
        answer = console.log('Invalid input');
    }
    return answer;
};
