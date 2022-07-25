## Problem
What happens when you run the following code? Why?

const NAME = 'Victor';\
console.log('Good Morning, ' + NAME);\
console.log('Good Afternoon, ' + NAME);\
console.log('Good Evening, ' + NAME);

NAME = 'Joe';\
console.log('Good Morning, ' + NAME);\
console.log('Good Afternoon, ' + NAME);\
console.log('Good Evening, ' + NAME);

## Solution
It will print 'Good Morning, Victor', 'Good Afternoon, Victor', and 'Good Evening, Victor' first. When it gets to NAME = 'Joe' it will result in an error preventing the other greetings from printing. This is because NAME is a constant and cannot be reassigned to another value.
