## Problem
Will this program produce an error when run? Why or why not?

const FOO = 'bar';\
{\
  const FOO = 'qux';\
}

console.log(FOO);

## Solution
No, the above will not produce an error. The console will log 'bar'. Variables declared and initialized in blocks stay in their blocks.
