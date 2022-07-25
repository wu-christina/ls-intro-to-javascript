## Problem
What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;\
function foo() {\
  let bar = 2;\
}

foo();\
console.log(bar);

## Solution
The code above logs 1 to the console. Executing the foo function does not affect the output because the foo variable declared inside the function is only accessible within that function. It cannot be used beyond that function.
