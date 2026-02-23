// SingleQuoted 
// let SingleQuoted = 'Raju kumar ';
// console.log(SingleQuoted);

// // Double Quoted 
// let DoubleQuoted = "This side Raju kumar ";
// console.log(DoubleQuoted);

// //Template literals (``)
// let templateLiteral =  `This is Rajukumar
// from New Delhi `;
// console.log(templateLiteral);


// Core Properties and Concepts
// .length 

// let greeting = "Hello ji kaise ho";
// console.log(greeting.length);

// let emptySting = "";
// console.log(emptySting.length);

// Accessing Individual Characters 
// let message = "Hello bro how are you ";
// console.log(message[0])
// console.log(message[1])
// console.log(message[2])

// Golden Rule : String are Immutable

// let name = 'Raju kumar';
// name[0] = 'T';
// console.log(name); // output : the origin name not changed


// Let's use a method that "Changes " the strings . 
// let upperName = name.toUpperCase();
// console.log(upperName);
// console.log(name)

// Common and Essential String Method 

let value = `I am learning the 
javascript how it work behind the scene`;
// console.log(value.toUpperCase())
// console.log(value.toLowerCase())

// Finding Substrings

let sentence = "The quick brown fox jumps over the lazy fox. ";
// console.log(sentence.indexOf("quick"));
// console.log(sentence.lastIndexOf("jumps"));
// console.log(sentence.includes("over"));

// Extracting Substring 
let text  = "You can learn Mern Stack in 2 months with hardwork ";
// console.log(text.slice(0,5));
// console.log(text.slice(5));
// console.log(text.slice(-23));

// // Replacing Substrings
// let wishes = "Hello world, Hello there ";
// console.log(wishes.replace("Hello","Hi"));

// let wishesto = "Hello world, Hello there it is";
// console.log(wishes.replaceAll("Hello","hi hi"));

// Cleaning up whitespace 

// let userInput = "      Raju   Kumar    ";
// console.log(userInput.trim())
// console.log(userInput.trimStart())
// console.log(userInput.trimEnd())

// Splitting a String into an Array 

// let fruit_items = "Apple,Mango,graphes,oranges";
// console.log(fruit_items.split());

// let weekdays = "Monday Tuesday wednesday thrusday friday saturday sunday ";
// console.log(weekdays.split());

// Template Literals (ES6) - The Modern Way
let name = "Alice";
let age = 30;
let message = "Hello, my name is " + name + " and I am " + age + " years old.";

console.log(message);


// new wala
let name1 = "Alice";
let age1 = 30;
let message1 = `Hello, my name is ${name1} and I am ${age1} years old.`;
// You can even put expressions inside:
let futureMessage = `Next year, I will be ${age1 + 1}.`;
console.log(futureMessage)