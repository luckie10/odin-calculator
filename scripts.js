const operatorFunctions = {
	add: function (a, b) { return a + b; },
	subtract: function (a, b) { return a - b; },
	multiply: function (a, b) { return a * b; },
	divide: function (a, b) { return a / b;	},
	
	operate: function (operator, a, b) { return this[operator](a, b); }
}

const OPERATORS = {
	'+': 'add',
	'-': 'subtract',
	'x': 'multiply',
	'/': 'divide',
}

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equationDisplay = document.getElementById('equationDisplay');
const resultDisplay = document.getElementById('resultDisplay');

let firstOperand;
let secondOperand;

function appendNumber(number) {
	if (!equationDisplay.textContent) {
		equationDisplay.textContent = number;
	} else {
		equationDisplay.textContent += number;
	}
}

function appendOperator(operator) {
	if (!equationDisplayValue) return

	equationDisplay.textContent = `${equationDisplayValue} ${operator}`
}

operatorButtons.forEach(button => {
	button.addEventListener('click', () => appendOperator(button.textContent));
});

numberButtons.forEach(button => {
	button.addEventListener('click', () => appendNumber(button.textContent));
});