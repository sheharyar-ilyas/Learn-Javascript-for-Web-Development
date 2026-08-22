// Primitive Datatypes oR Value Bypass

// 7 types : String, number, boolean, symbol, null, undefined, Bigint

// Non-primitive (Reference)
// Objects, Array, Functions

// Javascript is dynamically typed language

// Symbol Datatype

// const id = Symbol('283')
// const anotherid = Symbol('283')

// console.log(id === anotherid); //false

// Big Integer 

// let BigNumber = 2399392093888939792883333333333333333333333339993993n

// console.log(typeof BigNumber)

let arr = ["Ali", "Sheharyar", "Ahmad"];
let myObj = {
    name : 'Sheharyar',
    age : 19,
    grade : 'A'
}

const myfun = function(){
    console.log("My name is Muhammad Sheharyar.");
}

console.log(typeof arr);
console.log(typeof myObj);
console.log(typeof myfun);


// https://262.ecma-international.org/5.1/#sec-11.4.3
// We can also study these type of things in this given url