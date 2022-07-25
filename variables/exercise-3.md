## Problem
What happens when you run the following program? Why do we get that result?

{\
  let foo = 'bar';\
}

console.log(foo);

## Solution
It will result in an error saying foo is not defined because the variable foo is declared inside a block. When the program tries to run console.log on foo, it cannot find any variable called foo.
