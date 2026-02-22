

{
    const x = 10 ; 
    console.log(x);
}
const y = 20;
y = 40;// they give typeerror message show 
const z = 23; 
console.log(z); // SyntaxError : Missing inittializer 

// console.log(y)
//  Block Scope
if(true){
    const PI = 3.14159;
    console.log(PI)
}
console.log(PI);
//   outthe scope find give error => ReferenceError : PI is not defined

// Reassignment 
const Greeting = " Hello";
Greeting = "Hi" // Type erro:  assignment to constant variable 
console.log(Greeting)


// Mutability concept 
// Mutability
const CONFIG = { port: 8080 };
CONFIG.port = 3000; // This is allowed. CONFIG still points to the same object.
console.log(CONFIG.port)


// Temporal Dead Zone 
console.log(sum); //ReferenceError : Cannot access 'MY_CONST' before initialization. 
const sum = 20;
console.log(sum)