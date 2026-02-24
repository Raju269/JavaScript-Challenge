// The core concept & creation of array 

const { all } = require("axios");
const { anaglyphPass } = require("three/examples/jsm/tsl/display/AnaglyphPassNode.js");
const { motionBlur } = require("three/examples/jsm/tsl/display/MotionBlur.js");
const { clippingAlpha } = require("three/src/nodes/accessors/ClippingNode.js");
const { element } = require("three/tsl");

// An empty Array (an empty list)
let emptyArray = [];
// console.log(emptyArray);

// An array with number
let scores = [10,20,30,40,50];
// console.log(scores);

// An array with string 
let names = ['Raju','Dev','Sumit','Tarun'];
// console.log(names);

//  An array with mix element
let mixture = [1,2,3,'Himanshu','Piyush',true,false,null];
// console.log(mixture);

// the .length property
let fruits = ['Apple','Mango','Banana','Grapes','Oranges'];
// console.log(fruits.length);
// fruits.forEach(element => {
//     console.log(element)
// });
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits)
// }

// Accessing and Changing Elements (Zero-Based Indexing)
let numbers = [1,2,3,4,5,6];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// changing (writing) an element 
numbers[1] = 11;
// console.log(numbers);

// Getting the last element
// console.log(numbers.length-1);


// Basic Array Modification 

let tasks = ['Javascript','C programming','Notes'];
tasks.push("Revision","Code Practice","project");
// console.log(tasks); 

// let completedTasks = tasks.pop();
// console.log(tasks.pop())
// console.log(tasks)

// Adding / Removing from the beginning of the array 
let exam = ['Physics','Operating system ','Maths'];
// console.log(exam);
// exam.unshift("computer Network","Java");
// console.log(exam);

// let exam_changes = exam.shift();
// console.log(exam_changes);
// console.log(exam.shift());
// console.log(exam);

// Looping Over an Array (Iteration)

let myScores = [20,40,89,99,100];
let total = 0; 
// for(let i=0;i<myScores.length;i++){
//     console.log(`Processing Score at Index ${i}:${myScores[i]}`);
//     total= total+myScores[i];
// }
// console.log(`The total myScore is : ${myScores}`)

// The for...of Loop (The Modern, simpler way);

let myFriendNames = ['Shayam ','Ram','Vinod'];
// for (const value of myFriendNames){
//     console.log(`Hello, dosto ${myFriendNames}`);
// }

// Advanced Array Manipulation 
let months = ['Jan','March','April','June','July'];
// console.log(months)
// Example 1 : Removing "March ";
//  start at index 1, delete 1 element 
months.splice(1,1);
// console.log(months)

// Exmaple 2 Adding feb
// start at index 1, delete 0 elements, and add "Feb";
months.splice(2 ,0, "Feb");
// console.log(months);

// Example 3 : Replacing "April" with "May";
// Start at index 2 , delete 1 element, and add "May";
months.splice(2 ,1,"May");
// console.log(months);

// The slice() Method (Making a copy )
let animals = ["ants","dog","horse","camel","snake"];

// copy the elements from index 2 up to (but not including) index 4 
let middleAnimals = animals.slice(2,4);
// console.log(middleAnimals)

// If you omit the end index, it copies to the end of the array 
let allButFirstTwo = animals.slice(2);
// console.log(allButFirstTwo);

// A common way to make a full copy of an array : 
let fullcopy = animals.slice();
// console.log(fullcopy);  // the original is unchange ! 
// console.log(animals)

// The spread operator (...) The Modern way to copy / combines 
const arr1 = ["a", "b"];
const arr2 = ["c", "d"];

// Make a copy 
const copyofArr1 = [...arr1];
// console.log(copyofArr1);
 
// Combine two arrays 
const combines = [...arr1, ...arr2];
// console.log(combines);

// Add elements in the middle 
const withMiddle = [...arr1, "x" , "y ", ...arr2];
// console.log(withMiddle);

// Part - 5 Converting and Searching 
// Array to String conversion 

const nam = ['vikas','Aakash','vivek','Abhishek'];
// console.log(nam)
const namList = nam.join(" , ");
// console.log(namList);

// simple searching 
const numbe = [10,20,30,40,50,60,70,80,90,100];
// console.log(numbe.indexOf(20));
// console.log(numbe.lastIndexOf(90));
// console.log(numbe.indexOf(70));
// console.log(numbe.includes(50));
// console.log(numbe.includes(99));

// Advanced Array Methods: Sorting, Flattening and Delete 
// Sorting Array the .sort() Method 
let favoritFruits = ["Cherry","Apple","Banana"];
favoritFruits.sort();
// console.log(favoritFruits);

let number23 = [10,20,334,23,1,3,100]; // ya kya hua bhai ya tu sort nhi hua hai 
number23.sort();
// console.log(number23)

// The numbers are converted to strings: "100", "2", "5", "25", "1"
// The sort then compares them character by character:
// "1" comes before "100"
// "100" comes before "2"
// "2" comes before "25"
// let a = 1;
// let b = 100;
let values = [100,10,1 ,2,4 ,23,12];
values.sort((a,b)=> a-b);
// console.log(values);
values.sort((a,b)=>b-a);
// console.log(values);
values.sort((a,b)=>a-a);
// console.log(values)


// Flattending Arrays : The .flat() Method (ES2019);

const nestedArray = [1,[2,3],[4,5],8,4];
const flattened = nestedArray.flat(2);
// console.log(nestedArray);
// console.log(flattened);


const deeplyNested = [1, [2, [3, [4]]]];

// Go two levels deep
const flatTwoLevels = deeplyNested.flat(2);
// console.log(flatTwoLevels); // [1, 2, 3, [4]]

// To flatten completely, no matter how deep, you can use Infinity.
const completelyFlat = deeplyNested.flat(Infinity);
// console.log(completelyFlat); // [1, 2, 3, 4]


//  Deleting Elemments in an Array 
let items = ["a","b","c","d"];
// Remove "c" at index 2 ;
items.splice(2, 1);
// console.log(items);
// console.log(items.length)

let letter = ['a','b','d','e'];
delete letter[1]; 
// console.log(letter);
// console.log(letter[2]);
// console.log(letter.length);


// let jsArray = [];
// jsArray[0] = "first item";
// jsArray[1000] = "last item";

// console.log(jsArray.length); // Outputs: 1001
// console.log(jsArray[500]);   // Outputs: undefined


let mixedArray = [10, "hello", true, { id: 1 }];
console.log(mixedArray)