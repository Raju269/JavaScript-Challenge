// Block Scope 
for(let i=0;i<3;i++){
    // console.log(i);
}
// console.log(i); // Reference Error : i is not defined 

//Reassignment 
let counter = 0; 
counter = 1; // This is allowed . 

// Initialization 
let name ; // Allowed . 'name ' is now undefined . 
name = "Raju";
console.log(name);


// Temporal Dead Zone 
console.log(test);
// ReferenceError: Cannot access 'test' before initialization
let test = 34;