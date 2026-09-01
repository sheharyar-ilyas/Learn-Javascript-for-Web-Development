// we can defined object by two ways : one is object literals and second one is constructor base ( singleton )

// Object literal

const mySym = Symbol("key1")


const users = {
    name : "sheharyar",
    "full name" : "sheharyar ilyas",
    [mySym]: "my key",
    age : 19,
    email: "sheharyar@gmail.com",
    loggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(users.age)
// // console.log(users[email]) // when we passing in square brackets we must have pass in double quotes
// console.log(users["email"]) 
// console.log(users["full name"]) 
// console.log(users[mySym]) 
// console.log(typeof users[mySym]) 
// console.log(mySym) 


// For symbols 
// 1. You can change the data stored under a symbol.
// 2. You cannot create another symbol that matches it to sneakily steal or overwrite that property slot. It acts like a completely uncopiable padlock key.

// users["email"] = "sheharyar@gemini.com"
// console.log(users["email"]) 

// we can also freeze the object mean not to change the value , it does not mean it give an error when we ovvewrite , but it does not effect the value

// Object.freeze(users)

// users["email"] = "sheharyar@microsoft.com"
// console.log(users) 


users.greeting = function(){
    console.log("Hello Js user:")
}
console.log(users.greeting) // Output : [Function (anonymous)]
console.log(users.greeting()) // Output : Hello Js user:

users.greeting2 = function(){
    console.log(`Hello Js user: ${this.name}`)
}

console.log(users.greeting2()) // Output : Hello Js user: Hello Js user: sheharyar


users.greeting();
users.greeting2();