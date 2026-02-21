// /Converting data from one type to another is a fundamental task in JavaScript. This process is called **Type Conversion** or **Type Casting**.


// There are two main ways this happens in JavaScript:

// 1. **Implicit Conversion (Coercion):** JavaScript does it automatically behind the scenes. This is what happens with the == operator. It can be convenient but is often a source of bugs because it's not obvious.
// 2. **Explicit Conversion:** You, the developer, intentionally write code to convert a value from one type to another. **This is the recommended, safe, and professional way to handle type conversions.**

// Converting to String 
let num = 123;
let strNum = String(num); // "123"
console.log(strNum)
console.log(typeof strNum)

let xyz = 234342;
let stringvalue = String(xyz);
console.log(stringvalue);
console.log(typeof stringvalue)

let bool = true;
let strbool = String(bool);
console.log(strbool)
console.log(typeof strbool)


let isMarried = false;
let Arrange = String(isMarried);
console.log(Arrange)
console.log(typeof Arrange)

let mouse = null;
let stringmss = String(null);
console.log(stringmss);
console.log(typeof stringmss);


let keyword = undefined;
let Stringkey = String(keyword);
console.log(Stringkey)
console.log(typeof Stringkey)

let array = [1,2,3,4];
let stringarray = String(array);
console.log(stringarray)
console.log(typeof stringarray)



// ### Converting to a Number

// This is a very common task, especially when getting user input from the web, which is always a string.

// ### Method 1: The Number() Function (Recommended)

// This is the most direct way. It follows a clear set of rules:

let str23 = "1234";
let num1 = Number(str23);
console.log(num1)
console.log(typeof num1)
let name = "rajukumar ";
let your = Number(name);
console.log(your)
console.log(typeof your)

let strspace = "      100       ";
let info = Number(strspace);
console.log(info)
console.log(typeof info)

// ### Method 2: parseInt() and parseFloat()

// These functions are more specific. They parse a string from left to right and stop when they hit a non-numeric character.

// - parseInt(): Parses for an integer.
// - parseFloat(): Parses for a floating-point number.


// parseInt() is often useful for extracting a number from the beginning of a string.

let value = parseInt("34545");
console.log(value)
console.log(typeof value)
let floating = parseFloat("2349234.89234834");
console.log(floating)
console.log(typeof floating)
let stringvalue1 = parseInt("Rajukumar");
console.log(stringvalue1)
console.log(typeof stringvalue1)
let sometimes = parseInt(null);
console.log(sometimes)
console.log(typeof sometimes);
let emptyspace = parseInt(undefined);
console.log(emptyspace)
console.log(typeof emptyspace)

// ### Method 3: The Unary Plus + Operator (A common trick)

// Placing a + in front of a value is a concise way to convert it to a number, following the same rules as the Number() function.

let str = "50";
let num34 = +str; // 50 as tred as Number 
console.log(num34)
console.log(typeof num34)

// ### Converting to a Boolean

// In JavaScript, every value has an inherent "truthiness." Converting to a boolean makes this explicit.

// ### Method 1: The Boolean() Function (Recommended)

// This is the clearest way. The rules are simple: there is a small, specific list of "falsy" values. **Everything else is "truthy."**

// **The 6 Falsy Values:**

// 1. false
// 2. 0 (the number zero)
// 3. "" (an empty string)
// 4. null
// 5. undefined
// 6. NaN

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(false))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(-2343))
console.log(Boolean(23434))
console.log(Boolean("rkasdfjf"))
console.log(Boolean([]))
console.log(Boolean({}))