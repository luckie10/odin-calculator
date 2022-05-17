const OPERATORS = {
	'+': 'add',
	'-': 'subtract',
	'x': 'multiply',
	'/': 'divide',
}

let firstOperand;
let secondOperand;

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equationDisplay = document.getElementById('equationDisplay');
const resultDisplay = document.getElementById('resultDisplay');

const operatorFunctions = {
	add: function (a, b) { return a + b; },
	subtract: function (a, b) { return a - b; },
	multiply: function (a, b) { return a * b; },
	divide: function (a, b) { return a / b;	},
	
	operate: function (operator, a, b) { return this[operator](a, b); }
}

function appendNumber(number) {
	if (!equationDisplay.textContent) {
		equationDisplay.textContent = number;
	} else {
		equationDisplay.textContent += number;
	}
}

function appendOperator(operator) {
	if (!equationDisplay.textContent) return

	equationDisplay.textContent = `${equationDisplay.textContent} ${operator} `
}

operatorButtons.forEach(button => {
	button.addEventListener('click', () => appendOperator(button.textContent));
});

numberButtons.forEach(button => {
	button.addEventListener('click', () => appendNumber(button.textContent));
});