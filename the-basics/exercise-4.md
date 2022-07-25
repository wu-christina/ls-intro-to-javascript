## Problem
Explain why console.log('5' + 10) logs '510' instead of 15.

## Solution
Due to implicit type coercion, when a string and a non-string is concatenated, JavaScript changes the non-string type to a string. So in the example above, the number 10 becomes a string of '10'. Then, it performs normal string concatenation by chaining '5' with '10' to get '510'.
