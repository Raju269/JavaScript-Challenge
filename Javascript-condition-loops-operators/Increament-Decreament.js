// - ++ (Increment) & -- (Decrement): Increases or decreases a number by 1. code JavaScript
//     - **Gotcha: Prefix vs. Postfix.** The position of the operator matters critically.
//     - **Postfix (variable++):** The expression evaluates to the variable's **original value**, and *then* the variable is incremented.
//     - **Prefix (++variable):** The variable is incremented **first**, and *then* the expression evaluates to the **new value**.

let postfix = 5;
let prefix = 5;
console.log(postfix++);  // Print 5. postfix is now 6
console.log(postfix); // Print 6.

console.log(++prefix);  // Print 6. 'prefix' is now 6 
console.log(prefix);  // Print 6.