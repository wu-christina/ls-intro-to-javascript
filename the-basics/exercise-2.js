// Determine the individual digits of a 4-digit number like 4936

let num = 4936;
let base = 10;

// find ones place digit
let ones = num % base;

// find tens place digit
let tens = ((num - ones) / base) % base;

// find hundreds place digit
let hundreds = (num - ones - (tens * base)) / Math.pow(base, 2) % base;

// find thousands place digit
let thousands = (num - ones - (tens * base) - (hundreds * Math.pow(base, 2))) / Math.pow(base, 3) % base;

console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);

