/* Modify the age.js program you wrote in the exercises for the Variables chapter.
The updated code should ask the user to enter their age instead of hard-coding the age in the program. */


let rlSync = require('readline-sync');

let age = rlSync.question('How old are you? ');
let tenYears = 10;
let twentyYears = 20;
let thirtyYears = 30;
let fourtyYears = 40;


console.log(`You are ${age} years old.`);
console.log(`In ${tenYears}, you will be ${Number(age) + tenYears} years old.`);
console.log(`In ${twentyYears}, you will be ${Number(age) + twentyYears} years old.`);
console.log(`In ${thirtyYears}, you will be ${Number(age) + thirtyYears} years old.`);
console.log(`In ${fourtyYears}, you will be ${Number(age) + fourtyYears} years old.`);
