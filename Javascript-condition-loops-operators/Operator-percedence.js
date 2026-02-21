// ### **8. Operator Precedence**

// This determines the order in which operators are executed. For example, multiplication (*) has a higher precedence than addition (+).

let result_value = 45+34-4*2+3/20;
console.log(result_value);
// Best Practice: Don't memorize the entire precedence table. When in doubt, use parentheses () to make the order explicit and your code more readable.

let resolve = (45+34) - (4*2) + (3/20);
console.log(resolve);