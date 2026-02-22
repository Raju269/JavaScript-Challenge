// Function Scope (not Block Scope)
if(true){
    var leak = " I am visible outside the if-block ";
    console.log(leak);
}
console.log(leak); // its allowed to as the scope 


// Hoisting Behavior
console.log(myvar);// outputs: Undefined (no error)
var myvar = " Hello "

//Redeclaration 
var x = 10 ; 
var x = 30; 
// Allowed. x is now 20. 
console.log(x)