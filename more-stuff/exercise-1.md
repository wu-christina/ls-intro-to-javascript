## Problem
What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

## Solution
The code logs [1, 4, 3]. This is because array1 and array2 reference the same array. By changing an element in array1, also changes the element in array2.
