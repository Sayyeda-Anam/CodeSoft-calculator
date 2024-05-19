let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstNumber = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            currentInput += button.textContent;
            display.textContent = currentInput;
        } else if (button.classList.contains('operator')) {
            operator = button.textContent;
            firstNumber = parseFloat(currentInput);
            currentInput = '';
        } else if (button.classList.contains('equals')) {
            let secondNumber = parseFloat(currentInput);
            let result = operate(firstNumber, secondNumber, operator);
            display.textContent = result;
            currentInput = result;
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            operator = '';
            firstNumber = null;
            display.textContent = '0';
        }
    });
});

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Error';
    }
}