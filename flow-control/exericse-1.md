## Problem
What values do the following expressions evaluate to?

false || (true && false);\
true || (1 + 2);\
(1 + 2) || true;\
true && (1 + 2);\
false && (1 + 2);\
(1 + 2) && true;\
(32 * 4) >= 129;\
false !== !true;\
true === 4;\
false === (847 === '847');\
false === (847 == '847');\
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

## Solution

| Expression | Answer |
| ---------- | ----------  |
| false \|\| (true && false); | false |
| true \|\| (1 + 2); | true |
| (1 + 2) \|\| true; | 3 |
| true && (1 + 2); | 3 |
| false && (1 + 2); | false |
| (1 + 2) && true; | 3|
| (32 * 4) >= 129; | false |
| false !== !true; | false |
| true === 4; | false |
| false === (847 === '847'); | true |
| false === (847 == '847'); | false |
| (!true \|\| (!(100 / 5) === 20) \|\| ((328 / 4) === 82)) \|\| false; | true |
