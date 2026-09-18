// const userEmail = "sheharyar@google.com"

// if(userEmail) {
//     console.log("You have an email address")
// } else{
//     console.log("You do not have an email address")
// }

// const userEmail = ""

// if(userEmail) {
//     console.log("You have an email address")
// } else{
//     console.log("You do not have an email address")  // Output: You do not have an email address
// }
// const userEmail = []

// if(userEmail) {
//     console.log("You have an email address")
// } else{
//     console.log("You do not have an email address")  // Output: You have an email address
// }


// The Only 8 Falsy Values in JavaScriptTo fix this logic, it helps to know what JavaScript does consider false. Only these 8 values are falsy:
// 1. false (the boolean)
// 2. 0 and -0 (the numbers)
// 3. 0n (BigInt zero)
// 4. "", '',   (empty strings)
// 5. null
// 6. undefined
// 7. NaN (Not a Number)
// Since [] is not on this list, it defaults to truthy.



// Common Truthy Values (That often surprise people)While standard data like non-empty strings and non-zero numbers are truthy, here are the objects and structures that developers frequently mistake for falsy:
// 1. Empty Objects & Arrays: [] (empty array) and {} (empty object).
// 2. Empty Functions: function() {}.
// 3. String "0" or "false": "0", 'false', and " " (a string containing just a space) are truthy because they are not empty strings.
// 4. Negative Numbers: -42 (only 0 and -0 are falsy).
// 5. Special Globals: Infinity and -Infinity.

// How to quickly check if a value is TruthyYou can force JavaScript to show you the true boolean nature of any value using the Logical NOT (!) operator twice:

// console.log(!!"hello"); // true (non-empty string)
// console.log(!![]);      // true (empty array)
// console.log(!!{});      // true (empty object)
// console.log(!!"0");     // true (string containing zero)
// console.log(!!-1);      // true (negative number)


// Nullish Coalscing Operator ??  {null, undefined}

// const val1 = 5 ?? 20
// console.log(val1) // Output: 5
// const val1 = null ?? 20

// console.log(val1) // Output: 20

// const val2 = undefined ?? 20
// const val3 = null ?? undefined ?? 20
// console.log(val2) // Output: 20
// console.log(val3) // Output: 20


// Ternary Operator  (? : )

// const price = 100

// price > 50 ? console.log("Price is greater than 50") : console.log("Price is less than or equal to 50") // Output: Price is greater than 50