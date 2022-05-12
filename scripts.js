const operators = {
	add: function (a, b) { return a + b; },
	subtract: function (a, b) { return a - b; },
	multiply: function (a, b) { return a * b; },
	divide: function (a, b) { return a / b;	},
	
	operate: function (operator, a, b) { return this[operator](a, b); }
}

const numberButtons = document.querySelectorAll('.number');
const display = document.getElementById('display');

let displayValue = '0';

function updateDisplay(content) {
	display.textContent = content;
}

function clickNumber(event) {
	if (displayValue === '0') {
		displayValue = event.target.id;
	} else {
		displayValue += event.target.id;
	}

	updateDisplay(displayValue);
}

numberButtons.forEach(button => {
	button.addEventListener('click', clickNumber);
});