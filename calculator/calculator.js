function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (arr) {
	result = 0;
	for (let i in arr) {
		result += arr[i];
	}

	return result;
}

function multiply (arr) {
	result = 1;

	for (let i in arr) {
		result *= arr[i];
	}

	return result;
}

function power(base, power) {
	result = base;
	for (i = 0; i < (power - 1); i++) {
		result *= base;
	}

	return result;
}

function factorial(num) {
	
	//0 is a special case
	if (num == 0) {	
		return 1;
	}
	//every other positive integer
	else {
		for (i = (num - 1); i > 1; i--) {
			num *= i;
		}
	}
	return num;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}