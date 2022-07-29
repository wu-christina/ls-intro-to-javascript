## Problem
What gets returned by y++ in the second snippet, and why?

> let x = "5"\
> x = x + 1\
= "51"


> let y = "5"\
> y++

## Solution
The number 5 is returned. When ++ is applied to a string, the string is coerced into a number. ++ increments 5 to 6. However, ++ is placed after y, so the increment operator returns the value before incrementing.
