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

function clickNumber(event) {
	if (!inputDisplayValue) {
		inputDisplayValue = event.target.id;
	} else {
		inputDisplayValue += event.target.id;
	}

	updateInputDisplay(inputDisplayValue);
}

function clickOperator(event) {
	equationDisplayValue = `${equationDisplayValue} ${inputDisplayValue} ${event.target.id}`
	updateEquationDisplay(equationDisplayValue);
}

operatorButtons.forEach(button => {
	button.addEventListener('click', clickOperator);
});

numberButtons.forEach(button => {
	button.addEventListener('click', clickNumber);
});