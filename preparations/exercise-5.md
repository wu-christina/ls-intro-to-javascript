## Problem
Identify the Constructors for each of the following methods and classify each method as either a "Static" or a "Prototype" method:
* substring
* create
* fromCharCode
* slice
* toString

## Solution
Method: Using [MDN](https://developer.mozilla.org/en-US/), if method is in the Constructor.prototype.methodName() format, it is an instance/prototype method. Otherwise, it is a static method.

| Method Name   | Constructor | Method Type |
| ----------- | ----------- | ----------- |
| substring     | String      | Prototype |
| create    | Object      | Static |
| fromCharCode    | String      | Static |
| slice     | Array, String     | Prototype |
| toString     | Object, String, Array, Number     | Prototype |
