## Problem
What does the following code log to the console, and why?

function barCodeScanner(serial) {\
  switch (serial) {\
    case '123':\
      console.log('Product1');\
    case '113':\
      console.log('Product2');\
    case '142':\
      console.log('Product3');\
    default:\
      console.log('Product not found!');\
  }\
}

barCodeScanner('113');

## Solution
The above will print the following:
* Product 2
* Product 3
* Product not found!

This is because a break statement was not added. Starting at case '113', it will evaluate the console.log method but because there is no break statement, it will go to the next case statement and so on until it reaches a break statement or the end because JavaScript does not check the condition of the additional cases.
