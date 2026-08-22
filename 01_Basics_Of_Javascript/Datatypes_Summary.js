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

// let arr = ["Ali", "Sheharyar", "Ahmad"];
// let myObj = {
//     name : 'Sheharyar',
//     age : 19,
//     grade : 'A'
// }

// const myfun = function(){
//     console.log("My name is Muhammad Sheharyar.");
// }

// console.log(typeof arr);
// console.log(typeof myObj);
// console.log(typeof myfun);


// https://262.ecma-international.org/5.1/#sec-11.4.3
// We can also study these type of things in this given url


// +++++++++++++ About Memory +++++++++++++++++

// Stack ( Primitive datatypes ) ---> make copy
// Heap ( Non-Primitive ) ---> Take reference of memory

// let name = "Sheharyar"
// let anothername = name

// anothername = "ALi"

// console.log(anothername)
// console.log(name)
// It uses stack memory to store data


// let myObj = {
//     name : 'Sheharyar',
//     age : 19,
//     grade : 'A'
// }

// let obj2 = myObj

// obj2.age = 20

// console.log(obj2.age)
// console.log(myObj.age)

// It uses heap memory to store reference