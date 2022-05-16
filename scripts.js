const operators = {
	add: function (a, b) { return a + b; },
	subtract: function (a, b) { return a - b; },
	multiply: function (a, b) { return a * b; },
	divide: function (a, b) { return a / b;	},
	
	operate: function (operator, a, b) { return this[operator](a, b); }
}

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equationDisplay = document.getElementById('equationDisplay');
const inputDisplay = document.getElementById('inputDisplay');

let inputDisplayValue;
let equationDisplayValue = '';

function updateEquationDisplay(content) {
	console.log(equationDisplayValue);
	equationDisplay.textContent = content; 
}

function updateInputDisplay(content) {
	inputDisplay.textContent = content;
}

function appendNumber(event) {
	if (!inputDisplayValue) {
		inputDisplayValue = event.target.textContent;
	} else {
		inputDisplayValue += event.target.textContent;
	}

	updateInputDisplay(inputDisplayValue);
}

function appendOperator(event) {
	equationDisplayValue = `${equationDisplayValue} ${inputDisplayValue} ${event.target.id}`
	updateEquationDisplay(equationDisplayValue);
}

operatorButtons.forEach(button => {
	button.addEventListener('click', appendOperator);
});

numberButtons.forEach(button => {
	button.addEventListener('click', appendNumber);
});