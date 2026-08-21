let score = "33"
let SCORE = "33jsajkv"
let scoring = null
let scorings = undefined
let scoring_booleant = true
let scoring_booleanf = false

console.log(typeof score);
console.log(typeof SCORE);
console.log(typeof scoring);
console.log(typeof scorings);

let valueInNumber = Number(score);
let valueInNumbers = Number(SCORE);
let valueInNumbering = Number(scoring);
let valueInNumberings = Number(scorings);
let valueInNumbering_T = Number(scoring_booleant);
let valueInNumbering_F = Number(scoring_booleanf);

console.log(typeof valueInNumber) // output:number
console.log(valueInNumber) // output: 33

console.log(typeof valueInNumbers) // output:number
console.log(valueInNumbers) // output:NaN mean Not a Number, So be careful about converting datatypes

console.log(typeof valueInNumbering) // output:number
console.log(valueInNumbers) // output:NaN mean Not a Number, So be careful about converting datatypes

console.log(typeof valueInNumberings) // output:number
console.log(valueInNumberings) // output:NaN, So be careful about converting datatypes

console.log(typeof valueInNumbering_T) // output:number
console.log(valueInNumbering_T) // output:1, So be careful about converting datatypes

console.log(typeof valueInNumbering_F) // output:number
console.log(valueInNumbering_F) // output:0, So be careful about converting datatypes

let loggedIn = undefined
let con_to_boolean = Boolean(loggedIn)
console.log(typeof con_to_boolean);
console.log(con_to_boolean);

1 or greater than 1 = true , 0=false
""= false , "anything in between" = true
null , undefined = false

let str = undefined
let con_str = String(str)
console.log(typeof con_str)
console.log(con_str)

Operations

console.log(5 + 5); // output: 10
console.log(2**3); // output: 8

console.log(5 + "5"); // output: 55
console.log("5" + 5); // output: 55
console.log(5 + "5" + 5); // output: 555
console.log(5 + 5 + "5"); // output: 105
console.log("5" + 5 + 5); // output: 555

console.log(5 - "5"); // output: 0
console.log("5" - 5); // output: 0
console.log(5 - "5" + 5); // output: 5
console.log("5" - 5 + "5"); // output: 55

console.log(5 * "5"); // output: 25
console.log("5" * 5); // output: 25
console.log(5 * "5" + 5); // output: 30
console.log("5" * 5 + "5"); // output: 255

console.log(10 / "2"); // output: 5
console.log("10" / 2); // output: 5
console.log(10 / "2" + 2); // output: 7
console.log("10" / 2 + "2"); // output: 52

console.log(10 % "3"); // output: 1

console.log(+true); // output: 1
console.log(+false); // output: 0

console.log(+""); // output: 0
console.log(+null); // output: 0
console.log(+undefined); // output: NaN

let num1 , num2 , num3 = 23
console.log(num1 , num2 , num3) // output: undefined undefined 23
let num1 , num2 , num3;
num1 = num2 = num3 = 23
console.log(num1 , num2 , num3) // output: 23 23 23

Preincrment and Postincrement

let num1 = 5
let num2 = 5

console.log(num1++); // output: 5
console.log(++num2); // output: 6

