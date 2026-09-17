
// const obj = {
//     username : "sheharyar",
//     rollNo : 154,

//     welcomeMessage : function()
//     {
//         console.log(`${this.username} , welcome to Uet`)
//     }
// }

// obj.welcomeMessage()
// console.log(this)  // this give me output as: {}

// function code()
// {
//     let user = "sheri"
//     console.log(this.user)
// }

// code()  if we use this then we get output is undefined because this keyword is mostly used in objects

const chai = () =>
{
    let username = "sheri"
    console.log(this.username)
}

chai()


// const number = (num1, num2) => {
//         return num1 + num2
// }

// console.log(number(10, 20))  // we get the result 30

// const number = (num1, num2) => num1 + num2
// const number = (num1, num2) => (num1 + num2)   // if we write in curly braces then we have to write return keyword otherwise we get undefined but in this case we not write return keyword and we get the result because we use paranthesis instead of curly braces


// If we return object then  we have to use paranthesis 

const number = (num1, num2) => (
    {
        username: "sheharyar", age: 20, sum: num1 + num2
    }
)

console.log(number(10, 20))