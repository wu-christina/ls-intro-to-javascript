/* Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation. */

function multiplier () {
	let rlSync = require('readline-sync');
	let num1 = rlSync.question('Enter your first number: ');
	let num2 = rlSync.question('Enter your second number: ');
	return `${num1} * ${num2} = ${num1 * num2}`;
}

console.log(multiplier());
