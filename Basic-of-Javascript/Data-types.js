let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

let n4 = 'something here too' / 2;
console.log(n4)

let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);


let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

let age = null;
console.log(age)

let a;
console.log(a);


let sym1 = Symbol("Geeks");
let sym2 = Symbol("Geeks");
console.log(sym1 == sym2);

let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);



// Non Primitive Datatypes


let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type)

// Arrays 
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);


// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ajay"));


// Creating a new Date object for the
// current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);


// Creating a regular expression to match the word "hello"
let pattern = /hello/;

// Testing the pattern against a string
// Returns false because "hello" is not present
let result = pattern.test("Hello, world!"); 

console.log(result);


let x = 42;   
console.log(x)

x = "hello";  
console.log(x)

x = [1, 2, 3]
console.log(x)

let s = "hello";
console.log(s.length);  

// Example with a number
let x1 = 42;
console.log(x1.toString()); 

// Example with a boolean
let y = true;
console.log(y.toString());

/* Internal Working of primitives
   to be treeated as objects
   
// Temporary wrapper object
let temp = new String("hello"); 

console.log(temp.length); // 5

// The wrapper is discarded after use
temp = null; */


console.log(typeof NaN);
console.log(NaN === NaN);

let s123 = Symbol("abc");
let s234 = Symbol("abc");
console.log(s123 === s234);


let xu = 42;     // Integer
let yv = 42.5;   // Floating-point

console.log(typeof xu); 
console.log(typeof yv);

let sy1 = "gfg";   // String
let sy2 = 'g';    // Character

console.log(typeof sy1); 
console.log(typeof sy2);