## Problem
The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {\
  console.log(counter);\
  counter += 1;

  if (counter > 2) {\
    break;\
  }\
}

## Solution
This is because the conditional in the while loop assigns counter to 1, rather than using a strict equality to check if counter is equal to 1. When JavaScript checks the condition, counter = 1, it will evaluate that as truthy and will never increment counter, so the loop will continously run because the condition will never switch to false.
