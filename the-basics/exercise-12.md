## Problem
What does the following expression evalate to?

'12' < '9'

## Solution
It evaluates to true. JavaScript will evaluate the first character only of each string. So in the above case, it will compare 1 against 9, which is true. If numbers were used instead of strings, the above expression would evaluate to false because 12 is not less than 9.

Using another example, if we were to compare '49' < '141', JavasScript will only compare 4 against 1 and return false because 4 is not less than 1. If numbers were used instead of strings, this example would evaluate to true because 49 is less than 141.
