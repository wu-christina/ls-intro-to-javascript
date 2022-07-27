/* Write a function similar to the oddLengths function from
Exercise 6, but don't use map or filter. Instead, try to use the
reduce method. */


function oddLengths(array) {
	return array.reduce((filteredNumbersArray, values) => {
		let length = values.length;
		if (length % 2 !== 0) {
			filteredNumbersArray.push(length);
		}
		return filteredNumbersArray;
	}, []);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
