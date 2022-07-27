/* Use reduce to compute the sum of the squares of all of the
numbers in an array: */

function sumOfSquares(array) {
	return array.reduce((previousValue, currentValue) => {
		return previousValue + (Math.pow(currentValue, 2))
	}, 0)
}


let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
