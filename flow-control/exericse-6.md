## Problem
What does this code output to the console?


function isArrayEmpty(arr) {\
  if (arr) {\
    console.log('Not Empty');\
  } else {\
    console.log('Empty');\
  }\
}

isArrayEmpty([]);

## Solution
The code will output 'Not Empty' despite being an empty array. It will evaluate to a truthy value because it is not the following: 0, null, undefined, NaN, an empty string, or false. The if statement run as a result.
