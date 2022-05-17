const OPERATORS = {
	'+': 'add',
	'-': 'subtract',
	'x': 'multiply',
	'/': 'divide',
}

let activeOperator;
let firstOperand;
let secondOperand;
let clearMainDisplay = false;

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.getElementById('clear');
const equationDisplay = document.getElementById('equationDisplay');
const mainDisplay = document.getElementById('mainDisplay');

const operatorFunctions = {
	add: function (a, b) { return a + b; },
	subtract: function (a, b) { return a - b; },
	multiply: function (a, b) { return a * b; },
	divide: function (a, b) { return a / b;	},
	
	operate: function (operator, a, b) { 
		a = Number(a);
		b = Number(b);
		
		return this[operator](a, b);
	}
}

function appendNumber(number) {
	if (!mainDisplay.textContent || clearMainDisplay) {
		mainDisplay.textContent = number;
		clearMainDisplay = false;
	} else {
		mainDisplay.textContent += number;
	}
}

function appendOperator(operator) {
	if (!mainDisplay.textContent) return
	if (activeOperator) equals();

	firstOperand = mainDisplay.textContent;
	activeOperator = operator;
	clearMainDisplay = true;

	equationDisplay.textContent = `${mainDisplay.textContent} ${operator} `
}

function equals() {
	secondOperand = mainDisplay.textContent;

	equationDisplay.textContent = 
			`${firstOperand} ${activeOperator} ${secondOperand} =`;
	mainDisplay.textContent = operatorFunctions
			.operate(OPERATORS[activeOperator], firstOperand, secondOperand);

	activeOperator = null;
	clearMainDisplay = true;
}

operatorButtons.forEach(button => {
	button.addEventListener('click', () => appendOperator(button.textContent));
});

numberButtons.forEach(button => {
	button.addEventListener('click', () => appendNumber(button.textContent));
});

equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', () => {
	equationDisplay.textContent = '';
	mainDisplay.textContent = '';
	firstOperand = '';
	secondOperand = '';
	activeOperator = null;
	clearMainDisplay = false;
});
