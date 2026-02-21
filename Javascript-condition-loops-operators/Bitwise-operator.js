// These are less common in web development but are important to know. They operate on the binary (base-2) representation of numbers. Do not confuse & with && or | with ||.
 
console.log(5 & 3 );  // bitwise operation. 5 = 0101 & 0011 => 0001 => 1 
console.log(5 | 3 );  // bitwise operation. 5 = 0101 & 0011 => 0111 => 7 
console.log(5 ^ 3 );  // bitwise operation. 5 = 0101 ^ 0011 => 0110 => 6
console.log(~(5));    //bitwise operation. 5 = 0101 => -(0011)=> - 6 
console.log(5 << 1 );  // bitwise operation. 5<<1 => 0101 => 1010 shift the value with 0
console.log(5 >> 1 );  //bitwise operation. 5>>1 => 0101 => 0010 => 2 value hai its means right sa value shift jo ha gha 
