/*  Without using Object.is, write a function that will return
true if the argument is -0, and false if it is 0 or any other
number. */

function  negativeZeroChecker(value) {
	if (value > +0 === false) {
		return true;
	} else {
		return false;
	}
}

console.log(negativeZeroChecker(-0))
