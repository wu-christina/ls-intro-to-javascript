## Problem
What does the following function do?

function doSomething(string) {\
  return string.split(' ').reverse().map((value) => value.length);\
}

## Solution
The function takes the string that is passed in as an argument and splits it into an array of words, using ' ' as the delimiter. The array is then reversed. The reversed array returns a new array with the length of each word in the array.
