## Problem
What does the following code log to the console?

function scream(words) {\
  words = words + '!!!!';\
  return;\
  console.log(words);\
}

scream('Yipeee');

## Solution
The code does not log anything to the console because the return statement comes before the console.log and the return statement exits out of the function.
