## Problem
Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {\
  console.log(i += 1);\
}

## Solution
The above will not produce an error. The increment component of the for loop is optional so it will still run. It will output the following since the body of the for loop increments i:
1
2
3
4
5
