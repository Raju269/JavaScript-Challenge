let integer = 100;
let float = 99.53;
console.log(typeof integer);
console.log(typeof float);

// Creating Number 
let a = 23;  // Integer  
let b = 234.234324;  // Floating-point 
console.log(a);
console.log(b);

// Exponential Notation 
let billion = 1e9; // 1 followed by 9 zero => 1000000000
let tiny = 5e-6;  //5/ 10^6 => 0.0000005
console.log(billion);
console.log(tiny);

// Other Bases (Hex, Binary , Octal );
let hex = 0xFF; // Hexadecimal (base 16) => 225 in decimal
let binary = 0b1010; // Binary (base 2) => 10 in decimal 
let octal = 0o77; // Octal (base 8) => 63 in decimal
console.log(hex) ;
console.log(binary); 
console.log(octal);

// The "Gotcha" : Floating-Point Inaccuracy
console.log(0.1 + 0.2); // outputs : 0.300000000
console.log(0.1 + 0.2 === 0.3 ); // false 

// Special Numeric Values 
console.log(1 / 0 ); // Infinity 
console.log(-1 / 0 ); // -Infinity
console.log(typeof Infinity); // number 

// NaN (Not a Number);
console.log("Hello"/2); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(typeof NaN); // NaN

console.log(NaN === NaN); // false 

//  Important Number Properties and Methods
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("EPSILON:", Number.EPSILON);


// Check Number types
console.log(isNaN("blue")); // true (cerces "blue" to NaN)
console.log(Number.isNaN("Blue")); //False (it's a string, not NaN);

let result = 0/0; // result is NaN 
console.log(isNaN(result)); // true 
console.log(Number.isNaN(result)); //true

console.log(isFinite(10));        // true
console.log(isFinite("10"));      // true  (string → number)
console.log(isFinite(null));      // true  (null → 0)
console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false


// Formatting and Converting Numbers
let num = 255;
console.log(num.toString());    // "255" (base 10 - default)
console.log(num.toString(16));  // "ff"  (base 16 - hexadecimal)
console.log(num.toString(2));   // "11111111" (base 2 - binary)


// .toFixed
let price = 19.2334;
console.log(price.toFixed(2));
console.log(price.toFixed(5));

// toPrecision
let n = 123.455;
console.log(n.toPrecision(4))
console.log(n.toPrecision(1))
console.log(n.toPrecision(2))