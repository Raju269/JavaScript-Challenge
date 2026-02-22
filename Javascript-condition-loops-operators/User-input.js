const readlineSync = require('readline-sync');

const userName = readlineSync.question('May I know your name? ');

console.log("Hello " + userName);