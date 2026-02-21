console.log("How to use && operators")
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("short - circuiting concept ");
console.log("Raju" && 234); // they run the number value 234
console.log(234 && "Raju"); // They run the 1st value is true and then give value is 2nd one like Raju
console.log("" && 123); // its is not give any number because "" empty string is tried as 0 
console.log(234 && ""); // same condition is apply means 1st is true but another is false not excuted 

let user_name = "Rajukumar";
let user_password = "234";

if(user_name==="Rajukumar" && user_password==="234"){
    console.log("User is loggind in ");
}
else{
    console.log("wrong passwod and username ")
}

console.log("How to use || operators");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("short -circuiting concept of || operator ");
console.log("Raju" || 234); // they run the number value 234
console.log(234 || "Raju"); // They run the 1st value is true and then give value is 2nd one like Raju
console.log("" || 123); // its is not give any number because "" empty string is tried as 0 
console.log(234 || ""); // same condition is apply means 1st is true but another is false not excuted 

let email_id = "rajuk631149@gmail.com";
let email_password = "aasdf234324";

if(email_id==="rajuk631149@gmail.com" || email_password==="aasdf2343244534"){
    console.log("Email id is corrected  ");
}
else{
    console.log("wrong passwod and username ")
}


console.log("How to use != operators");
console.log(true != true);
console.log(false != false);

// - **The 6 Falsy Values:** false, 0, "" (empty string), null, undefined, NaN.
// - **Everything else is Truthy**, including "false", [] (an empty array), and {} (an empty object).