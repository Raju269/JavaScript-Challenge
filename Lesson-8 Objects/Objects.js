// This  is an objects representing a person 
let person124 = {
    name:"Raju kumar",
    age : 21,
    isStudent : true
};
// console.log(person124);

// part - 2 The Basics -CRUD operation create , read , update , Delete 
// A creating an object 
//  an empty object 
const car = {};
console.log(car);

// An Object with propeties 
const user = {
    username : "Raju_kumar",
    loginCount : 57,
    "is_prmium_member": true,  // keys with special characters must be in quotes 
};
// console.log(user);

// Accessing (Reading) Properties. 

// Dot Notation ( . );
// console.log(user.username);

// Bracket Notation 
// console.log(user["loginCount"])

let propertyToAccess = "username";
// console.log(user[propertyToAccess]);

// Updating and Adding (Creating) Properties 

const book = {
    titles : "the art of seduction "
}; 
// Update an existing property 
book.titles = "The lord krishna ";
// Add a new Property 
book.auother = "Raju kumar";
book.pages = 342;
// console.log(book);

// Deleting Properties 
delete book.pages;
// console.log(book)



//  Objects with Methods (Behavior);
const uservalue = {
    myName : "Rajveer",
    greeting:function(){
        // Here, `this` refers to the 'user' objects
        // console.log(`Hello, my name is ${this.myName}.`);
    }
};
// uservalue.greeting();

// Part 4: Looping Over an object's Properties 
// const car_Making = {
//     make : "Honda",
//     model : "Civic",
//     year: 2027,
//     valide : 14
// };

// for (const key in car_Making){
//     console.log(`Key : ${key}, Value : ${car_Making[key]}`)
// }

// const bike = {
//     make : 'sukuki',
//     model : "range",
//     year :  2023,
//     valide : 14
// };
// for(const key in bike){
//     console.log(`Key :  ${key}, value : ${bike[key]}`)
// }
// console.log(Object.keys(bike));
// console.log(Object.values(bike));
// for(const [key , value ] of Object.entries(bike)){
//     console.log(`${key} : ${value}`);
// }


// Advanced  Concepts 

// Shallow copy | How to copy an objects 
// A objects are a Reference type 
let obj1 = {
    Name :'Raju',
    Age : 22,
    email : "rajuk6349@gmail.com",
    sex : "Male",
    isMarried : false
}
let obj2 =obj1;
console.log(obj1.Name);
console.log(obj2)



// Shallow copy | How to copy an objects 
const original = {name :"Tarun",sex:"Male",Age:22};
// Using spread syntax (*most common and modern)
const copy = {...original};
copy.Age = 32;
// console.log(original.Age);
// console.log(copy.Age)
// console.log(original)
// console.log(copy)


// Modern ES6 + Syntax (Syntactic Sugar)


// old way : 
const name = "Alice";
const age = 30;

// Old way:
const userOld = { name: name, age: age };
console.log(userOld)

// New way:
const userNew = { name, age }; // Much cleaner
console.log(userNew)

// Method Shorthand 
// Old way: 
const userOldvalue = {
    sayHi : function(){
        console.log("hello ji ");
    }
}

// userOldvalue.sayHi();
// New way 
const UserNewValue = {
    sayHi(){
        console.log("Hi hello ji");
    }
}
// UserNewValue.sayHi();

// Computed Property Names 
let propertyName = "email";
const userManger = {
    name1:"bhai",
    [propertyName] :"ralicasd@gmail.com"
}
// console.log(userManger);

// The Moder way (Recommended) : Object.keys, Values, entries

const myUser = {
    name : "dev",
    forklift:"land",
    age :22,
    isStudent:true
};

console.log(myUser);

// Object.keys(obj) => Looping Over Just the keys 
const keys = Object.keys(myUser);
//  keys is now : ["name","age","isStudent"]

// Now we can use a simple for...of loop on this new array 
for(const key of keys){
    const value = myUser[key];
    console.log(`The key is "${key}" and the value is ${value}.`);
}

// Object.Values (obj)

const information = {
    name : "dev",
    forklift:"land",
    age :22,
    isStudent:true

};

const given = Object.values(information);
for(const value of given){
    console.log(`the value is ${value}`)
}

// Object.entries(Obj)
const entries = Object.entries(information);

for(const [key,value] of Object.entries(information)){
    console.log(`key :${key}, value: ${value}`);
}
// for  ... in 
for(const key in information){
    console.log(`key : ${key}, value is ${information[key]}`)
}

const missused = {
  name: "Alice",
  age: 30,
  isStudent: true
};

for (const key in missused) {
  // 'key' will be "name", then "age", then "isStudent"
  const value = missused[key];
  console.log(`Key: ${key}, Value: ${value}`);
}

// Let's modify the master Object prototype (NEVER DO THIS IN REAL CODE!)
Object.prototype.isInherited = true;

const person = { name: "Bob" };

console.log("--- Using for...in ---");
for (const key in person) {
  console.log(key); // Outputs: "name", AND "isInherited"
}

console.log("\\n--- Using Object.keys ---");
console.log(Object.keys(person)); // Outputs: ["name"] (It only sees its OWN properties)



// const originalUser = {
//   name: "Alice",
//   age: 30,
//   address: { // A nested object
//     city: "New York"
//   }
// };

// // Use the spread syntax to create a new object
// const shallowCopy = { ...originalUser };

// // --- Let's test the copy ---

// // 1. Change a top-level primitive property in the copy
// shallowCopy.age = 31;

// console.log(originalUser.age); // 30 (The original is safe!)
// console.log(shallowCopy.age);  // 31 (The copy was changed)

// // 2. Now, change a property in the NESTED object
// shallowCopy.address.city = "London";

// // The "gotcha" of a shallow copy:
// console.log(originalUser.address.city); // "London" (The original was also changed!)


const originalUser = {
  name: "Alice",
  age: 30,
  joined: new Date("2023-01-15"), // A Date object
  address: { // A nested object
    city: "New York"
  },
  roles: ["editor", "viewer"] // An array
};

// Use the built-in function to create a deep copy
const deepClone = structuredClone(originalUser);

// --- Let's prove it's a deep copy ---

// 1. Change a top-level primitive in the clone
deepClone.age = 31;

// 2. Change a property in the NESTED object
deepClone.address.city = "London";

// 3. Mutate the nested ARRAY
deepClone.roles.push("admin");

// 4. Mutate the nested DATE object
deepClone.joined.setFullYear(2024);


// --- Check the original object ---
// Everything is completely untouched!
console.log(originalUser.age);              // 30
console.log(originalUser.address.city);     // "New York"
console.log(originalUser.roles);            // ["editor", "viewer"]
console.log(originalUser.joined.getFullYear()); // 2023
