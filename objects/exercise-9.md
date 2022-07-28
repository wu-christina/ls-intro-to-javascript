## Problem
What does the following program log to the console? Why?


let foo = {\
  a: 'hello',\
  b: 'world',\
};

let qux = 'hello';

function bar(argument1, argument2) {\
  argument1.a = 'hi';\
  argument2 = 'hi';\
}

bar(foo, qux);

console.log(foo.a);\
console.log(qux);

## Solution
console.log(foo.a) will log 'hi' because bar reassigns the value of the a property from 'hello' to 'hi'. foo is an object and its mutable.

console.log(qux) will log 'hello' because when qux is passed in as an argument into the bar function, it is passed by value. JavaScript copies the value of the qux variable into the bar function. Any changes made to the argument are not reflected outside of the function.
