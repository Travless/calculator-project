class Calculator {
    constructor(prevDisplayInputText, currentDisplayInputText) {
        this.prevDisplayInputText = prevDisplayInputText;
        this.currentDisplayInputText = currentDisplayInputText;
        this.clear();
    }

    appendNumber(number) {
        // if (number === '.' && this.calcDisplay.includes('.')) return;
        this.currentDisplayInput = this.currentDisplayInput.toString() + number.toString();
    }

    clear() {
        this.currentDisplayInput = '';
        this.prevDisplayInput = '';
        this.operation = undefined;
    }

    operationChoice(operation) {
        if (this.currentDisplayInput === '') return;
        if (this.prevDisplayInput !== '') {
            this.equals();
        }
        this.operation = operation;
        this.prevDisplayInput = this.currentDisplayInput;
        this.currentDisplayInput = '';
    }

    equals() {
        let equation;
        const prev = parseFloat(this.prevDisplayInput);
        const current = parseFloat(this.currentDisplayInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                equation = prev + current;
                break;
            case '-':
                equation = prev - current;
                break;
            case '/':
                equation = prev / current;
                break;
            case 'X':
                equation = prev * current;
                break;
            default:
                return;
        }
        this.currentDisplayInput = equation;
        this.operation = undefined;
        this.prevDisplayInput = '';
    }

    getDisplayNumber(number) {
        const floatNum = parseFloat(number);
        if (isNaN(floatNum)) return '';
        return number.toLocaleString('en')
    }

    updateDisplay() {
        this.currentDisplayInputText.textContent = this.getDisplayNumber(this.currentDisplayInput);
        if(this.operation != null) {
            this.prevDisplayInputText.textContent = `${this.getDisplayNumber(this.prevDisplayInput)} ${this.operation}`;
        } else {
            this.prevDisplayInputText.textContent = '';
        }
    }
}

const prevDisplayInputText = document.querySelector('[data-previous-display-input]');
const currentDisplayInputText = document.querySelector('[data-current-display-input]');

const numButtons = document.querySelectorAll('[data-number]');

const clearButton = document.querySelector('[data-clear]');

const opButtons = document.querySelectorAll('[data-operation]')

const equalsButton = document.querySelector('[data-equals]');

const calculator = new Calculator(prevDisplayInputText, currentDisplayInputText);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operationChoice(button.textContent);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.equals();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
