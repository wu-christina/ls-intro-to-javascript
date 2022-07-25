/* Exercise 2 - In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name. */


function askName () {
  let rlSync = require('readline-sync');
	let firstName = rlSync.question('What is your first name? ');
  let lastName = rlSync.question('What is your last name? ');
	return `Hello, ${firstName} ${lastName}!`
}

console.log(askName());
