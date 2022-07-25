## Problem
What does this program log to the console? Why?

let foo = 'bar';\
{\
  let foo = 'qux';\
}

console.log(foo);

## Solution
The console will log 'bar.' The first line initializes a global variable foo and assigns it to the value 'bar.'

The lines beginning and ending with curly braces creates a block scope and declares a new foo variable initialized to 'qux'. Note this does not reassign the global foo variable to 'qux'. Variables initialized in a block stay in a block, meaning they cannot be used outside of the block.

Once the block is finished evaluating, the global variable foo is in scope again so when the program runs console.log(foo), it will log 'bar'.
