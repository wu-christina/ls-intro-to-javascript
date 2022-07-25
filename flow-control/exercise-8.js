/* Write a function that logs whether a number is between 0 and 50 (inclusive),
between 51 and 100 (inclusive), greater than 100, or less than 0. */

function numberCheck(num) {
	if (num < 0) {
		console.log('This number is less than 0.');
	} else if (num <= 50) {
		console.log('This number is between 0 and 50 (inclusive).');
	} else if (num <= 100) {
		console.log('This number is between 51 and 100 (inclusive).')
	} else {
		console.log('This number is greater than 100.')
	}
}

// Test
numberCheck(-54)
numberCheck(0)
numberCheck(27)
numberCheck(84)
numberCheck(100)
numberCheck(209)
