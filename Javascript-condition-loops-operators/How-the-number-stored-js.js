let a = 0.33;
let b = 0.50;
// 0.3 + 0.5 => 0.83 is not is correct answer is 0.8 why 
console.log(a+b);
console.log(a+b === 0.83);

let x = 0.1;
let y = 0.2;
let z = x+y ;
console.log(z)
console.log(z===0.3);

// How to fixed it this problem 
console.log((0.1 + 0.2 ).toFixed(2)); // give string value '0.30'

// 2nd Method to solve it 
let result = Math.round((0.1 + 0.2) * 100) / 100;
console.log(result); // 0.3


// 🔍 Why 0.33 + 0.50 = 0.8300000000000001 ?

// Same reason.

// Because:

// 0.33 cannot be stored exactly

// 0.50 is stored correctly (because 0.5 = 1/2 → easy in binary)

// But when added, small floating error appears.

// 📌 Important Concept Name

// This is called:

// 🔹 Floating Point Precision Error
// 🔹 Based on IEEE 754 standard

// All languages have this issue:

// JavaScript

// Python

// Java

// C++

// etc.

// ✅ How To Fix It?
// ✔ Method 1: Use toFixed()
// console.log((0.1 + 0.2).toFixed(2)); // "0.30"

// But this returns a string.

// ✔ Method 2: Use Math.round()
// let result = Math.round((0.1 + 0.2) * 100) / 100;
// console.log(result); // 0.3
// ✔ Method 3: Compare Using Tolerance (Best Practice)

// Instead of:

// z === 0.3

// Use:

// Math.abs(z - 0.3) < Number.EPSILON

// This checks if numbers are "close enough".

// 🎯 Simple Summary
// Decimal	Exact in Binary?
// 0.5	✅ Yes
// 0.25	✅ Yes
// 0.1	❌ No
// 0.2	❌ No
// 0.33	❌ No

// If number cannot be written as power of 2 fraction → small error happens.

// 🚀 Final Simple Rule

// 👉 Never compare decimal numbers using === directly
// 👉 Always round OR use tolerance comparison

