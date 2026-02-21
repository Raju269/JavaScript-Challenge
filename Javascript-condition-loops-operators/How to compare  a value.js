// ### Part 1: The Strict Equality Operator (===, !==)

// This one is simple because it has only one rule.

// - **Rule 1: Check the Types.**
//     - If the types are **different**, the result is false. No coercion happens.
//     - If the types are the **same**, compare the values:
//         - For primitives (number, string, boolean), the values are equal if they are the same.
//         - For null and undefined, they are only equal to themselves.
//         - For objects (including arrays), the references must point to the **exact same object in memory**.
//         - **Special Case:** NaN === NaN is always false.

// console.log(null === null)
// console.log(null === undefined)
// console.log(null === NaN)
// console.log(true === 1)
// console.log(false === 0)
// console.log(NaN === NaN)
// console.log(undefined === undefined)

// ### Part 2: The Loose Equality Operator (==, !=)

// This is the **Abstract Equality Comparison Algorithm**. The engine checks these rules in order.

// - **Rule 1: Same Types.**
//     - If the operands have the **same type**, behave exactly like the strict equality operator (===).
// - **Rule 2: null and undefined Special Case.**
//     - If one operand is null and the other is undefined, the result is true.
// - **Rule 3: String and Number.**
//     - If one operand is a string and the other is a number, convert the string to a number and re-compare.
// - **Rule 4: Boolean Conversion.**
//     - If one operand is a boolean, convert the boolean to a number (true -> 1, false -> 0) and re-compare.
// - **Rule 5: Object and Primitive.**
//     - If one operand is an object and the other is a string, number, or symbol, convert the object to a primitive (by calling valueOf() then toString()) and re-compare.
// - **Rule 6: Default.**
//     - If none of the above rules apply, the result is false.

// console.log(null == null)
// console.log(null == NaN)
// console.log(null == undefined)
// console.log(false == 0)
// console.log(true == 1)
// console.log(undefined == undefined)
// console.log(NaN == NaN)


// ### Part 3: The Relational Operators (<, >, <=, >=)

// This is the **Abstract Relational Comparison Algorithm**. It has a different, simpler (but still tricky) set of rules. The engine's first step is to get a primitive value from both operands.

// - **Step 1: Convert to Primitives (if necessary).**
//     - If an operand is an object, convert it to a primitive by calling its valueOf() and then toString() methods. The rest of the rules will operate on these new primitive values.
// - **Rule 1: String vs. String.**
//     - If **both** operands are strings (after the initial conversion step), perform a **lexicographical (dictionary) comparison** character by character. Do **not** convert them to numbers.
// - **Rule 2: The Default Numeric Conversion.**
//     - In **all other cases**, convert **both** operands to numbers and perform a numeric comparison.
//     - **Coercion Details for this rule:**
//         - strings are parsed ("5" -> 5, "hello" -> NaN).
//         - booleans are converted (true -> 1, false -> 0).
//         - null is converted to 0.
//         - undefined is converted to NaN.
//     - **Special Case:** If either of the final numbers is NaN, the result of the comparison is **always false**.

// let simpleobject = { 
//     valueOf(){
//         return 10;
//     }
// };

// What Happens Internally: obj is an object JS calls valueOf() Gets 10 Now comparison becomes:

// console.log(simpleobject > 5); // true

// let yourObject ={
//     valueOf(){
//         return {};
//     },
//     toString(){
//         return "20";
//     }
// }

// console.log(toString > 10); // true 


// step 2  
// console.log("Raju" < "Ravi");
// console.log("Raju" > "Piyush");
// console.log(null >= 0)
// console.log(null <= 0)
// console.log(null > 0)
// console.log(null < 0)
// console.log(true >= 1)
// console.log(false <= 0)

// ### A Simple Decision Tree for Comparisons

// Here is a mental checklist you can follow when you see a comparison:

// **1. Is the operator === or !==?**

// - **YES:** No coercion. Are the type and value identical? Done.

// **2. Is the operator == or !=?**

// - Are the types the same? -> Compare values.
// - Is it null == undefined? -> true.
// - Is a boolean involved? -> Convert boolean to number, then restart the check.
// - Is a string and number involved? -> Convert string to number, then compare.
// - Is an object involved? -> Convert object to primitive, then restart the check.

// **3. Is the operator <, >, <=, or >=?**

// - Are **both** sides strings? -> Use dictionary rules.
// - **NO?** -> Convert **both** sides to numbers (null->0, undefined->NaN) and do a numeric comparison. If NaN appears, the result is false.

// This ordered breakdown reveals why the behavior is so complex: there are three distinct sets of rules, and the rules for loose equality (==) are very different from the rules for relational comparisons (>=).

// 1️⃣ === and !== (Strict Equality)

// ✅ No type conversion

// ✅ Type + Value must both match

// 5 === 5        // true
// 5 === "5"      // false
// null === undefined // false

// 👉 Safest and recommended.

// 2️⃣ == and != (Loose Equality)

// ⚠️ Type conversion (coercion) happens.

// Rules Order:

// Same type → compare values

// null == undefined → true

// Boolean → convert to number (true → 1, false → 0)

// String + Number → convert string to number

// Object → convert to primitive first

// Examples:
// "5" == 5        // true
// true == 1       // true
// false == 0      // true
// null == undefined // true
// [] == 0         // true

// 👉 Complex and sometimes confusing.

// 3️⃣ < > <= >= (Relational Operators)

// Different from ==.

// Rule 1:

// If BOTH are strings → dictionary comparison

// "apple" < "banana" // true
// "2" > "12"         // true
// Rule 2:

// Otherwise → convert BOTH to numbers

// "5" > 3        // true
// null >= 0      // true (null → 0)
// undefined > 0  // false (undefined → NaN)

// 👉 If NaN appears → result is always false.

// 🔥 Special Conversions
// Value	Converts To
// true	1
// false	0
// null	0 (in numeric comparison)
// undefined	NaN
// []	"" → 0
// [5]	"5" → 5
// 🎯 Final Mental Model
// ===

// No conversion.

// ==

// Smart but tricky conversion rules.

{/* < > */}

{/* Both strings → dictionary

Else → numbers

✅ Best Practice

👉 Use === in real projects.
👉 Avoid == unless you fully understand coercion. */}