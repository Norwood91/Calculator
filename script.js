//CLASS
class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {}

  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand;
    this.previousOperandText.innerText = this.previousOperand;
  }
}

//SELECTORS
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandText = document.querySelector('[data-prev-operand]');
const currentOperandText = document.querySelector('[data-curr-operand]');
const clearButton = document.querySelector('[data-clear]');

//VARIABLES
const calculator = new Calculator(previousOperandText, currentOperandText);
//For each button, add an event listener, on click, to display whatever button is clicked on the calc display
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
