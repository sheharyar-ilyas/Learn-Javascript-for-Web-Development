console.log("2" > 1); // output: true
console.log("2" > "12"); // output: true
console.log("2" > "12" && 1 > 0); // output: true
console.log(null > 0); // output: false
console.log(null == 0); // output: false
console.log(null >= 0); // output: true

console.log(undefined > 0); // output: false
console.log(undefined == 0); // output: false
console.log(undefined >= 0); // output: false  

console.log(2>=1); // output: true

// === it means strictly checking of datatype and value
console.log(2 === 2); // output: true
console.log(2 === "2"); // output: false

console.log(2 == 2); // output: true
console.log(2 == "2"); // output: true