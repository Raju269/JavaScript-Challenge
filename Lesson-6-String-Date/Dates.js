// Creating Date objects 
const now123 = new Date();
console.log(now123) ; /// e.g., Mon Oct 28 2024 03:30:00 GMT+0530 (India Standard Time)

// Create a Date from a Timestamp 
// Date.now () is a qucik way to get the Current timpstap as a number 
const currentTimestamp = Date.now();
console.log(currentTimestamp);

// Now , let;s Create a Date objects from that number. 
const daer = new Date(1771859778495);
console.log(daer);


// Create a specific Date (The Recommended way)
// new Date(year, months, day, hours, minutes, seconds, ms);
const myDates = new Date(2026, 8, 4, 6, 10,11,123);
console.log(myDates.toString());

// Getting information from a Date Object (Getters);
const now = new Date(); // let's pretend it's 
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getUTCMilliseconds());


// Changing  a Date; Setters and Mutability 
const da = new Date(1759262295036); // Creates a specific date
console.log("Before:", da);

// Let's change the month to May (index 4)
da.setMonth(4);

console.log("After:", da); // The ORIGINAL 'da' object has been changed.

// Date Auto-Correction (Rollover)

// 2025 is not a leap year, so February has 28 days.
// You are asking for Feb 28 + 2 days.
const a = new Date(2025, 1, 30);

// The date object auto-corrects to March 2nd, 2025.
console.log(a); // Outputs: Sun Mar 02 2025 ...


// Formatting Dates for Display 
const _now = new Date();

// .toString() is the default, verbose format in the local timezone.
console.log(_now.toString());
// e.g., Mon Oct 28 2024 04:15:00 GMT+0530 (India Standard Time)

// .toDateString() gives you just the date part.
console.log(_now.toDateString());
// e.g., Mon Oct 28 2024

// .toISOString() gives the universal, unambiguous UTC time. The 'Z' means UTC.
// This is what you send to servers.
console.log(_now.toISOString());
// e.g., 2024-10-27T22:45:00.000Z

// .toLocaleString() formats the date and time in a way that is natural
// for the user's region and language. BEST for user display.
console.log(_now.toLocaleString());
// e.g., in India: 28/10/2024, 4:15:00 am
// e.g., in the US: 10/27/2024, 4:15:00 PM


// Major Problem 
// Months start at 0, but days start at 1 
const abc = new Date(2026,0,1);
const xyz = new Date(2026,11,23);
console.log(abc)
console.log(xyz)


// Mutable (Can be changed accidentally )
const date = new Date(2026, 9,1);
date.setMonth(10); // Oops ! DAte is modified
console.log(date); // Changed to November !
// This caused bugs in apps

// Weird Quirks and bugs 
new Date(2025, 1, 30); // Feb 30? Becomes March 2!
new Date('2025-02-30'); // Invalid Date

// Inconsistent behavior
new Date(2025, 0); // Jan 1, 2025 00:00:00
new Date(2025);    // Jan 1, 1970 plus 2025 milliseconds! 😱

// Much better!
// const date = Temporal.PlainDate.from('2025-10-01');
// date.add({ days: 3 }); // Returns new date, immutable!
// date.toString(); // '2025-10-01' (clean!)
