/* Modify the age.js program you wrote in the exercises for the Input/Output chapter.
The updated code should use a for loop to display the future ages. */




let rlSync = require('readline-sync');
let age = rlSync.question('How old are you? ');

console.log(`You are ${age} years old.`);
for (let i = 10; i <= 40; i += 10) {
	console.log(`In ${i} years, you will be ${Number(age) + i} years old.`)
}



