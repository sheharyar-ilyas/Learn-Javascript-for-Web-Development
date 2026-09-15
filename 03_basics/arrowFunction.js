
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