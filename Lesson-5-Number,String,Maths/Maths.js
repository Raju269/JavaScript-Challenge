// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN10);

const { min, float } = require("three/tsl");

// Rounding the number values
// console.log(Math.round(23.34));
// console.log(Math.floor(32.234));
// console.log(Math.ceil(34.23));
// console.log(Math.trunc(56.08034));

// Other common function :
// console.log(Math.abs(-323));
// console.log(Math.pow(2,3));
// console.log(Math.sqrt(25));
// console.log(Math.max(23,45,89));
// console.log(Math.min(94,78,23,11));
// console.log(Math.random())  //Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).


// Working with randown to used case got it. 
// for(let i=0;i<10;i++){
//     console.log(Math.floor(Math.random()*10)+1);

// }
// for(let i =0 ;i<10;i++){
//     let max = 20 ;
//     let min = 11;
//      console.log(Math.floor(Math.random()*(max-min+1))+min);
// }


// Generates a randown integer between a minium and maximum values (inclusive.)
//  * @param {number} min The minimum possible value.
//  * @param {number} max The maximum possible value.
//  * @returns {number} A random integer within the range.

function getRandomInt(min,max){
    // Calculate the number of possible outcome (the size of our range )
    const range = max-min+1;

    // Scale up Math.random() to create  a float in the range [0,range)
    const scaled = Math.random()*range;
    // Round down to get an integer in the range [0,range-1]
    const floored = Math.floor(scaled);
    // shift the range up to [min, max] by adding the minimum value 
    const result = floored + min;
    return result;
}
// Example usage;
console.log("Random number between 1 and 10 : ",getRandomInt(1,10));
console.log("Random number between 50 and 100 : ",getRandomInt(50,100));
console.log("Random number between 1 and 6 : ",getRandomInt(1,6));
