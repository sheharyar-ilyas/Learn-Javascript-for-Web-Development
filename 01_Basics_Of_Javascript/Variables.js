// console.log("My name is Muhammad Sheharyar.");

const num = 123
let accountEmail = "sheharyar@gmail.com" // Prefer to use 
var password = "12443"
accountDetail = "Pass: Email" // We also use this , but it is not a good practice

accountEmail = "sheharyar838@gmail.com"
password = "1283929"
accountDetail = "Pass: City : Sahiwal"

// num = 1278 not allowed

let accountState; // output: undefined

console.log(num);
console.table([num,accountEmail, password, accountDetail,accountState])

/*
Prefer not to use var 
because of issue in block scope and in functional scope
*/
