// "use strict mode"
// function sayMyname()
// {
//     console.log("Muhammad Sheharyar")
// }

// sayMyname // This is reference of function 
// sayMyname() // This is execution  of function 

// function addTwoNumbers(num1,num2)
// {
//     console.log(num1 + num2)
// }

// const result = addTwoNumbers(4,6) // in this result variable we have undefined because it does not return the value it only console the value
// console.log(result)

// addTwoNumbers()   // It does not give error but in output it shows NaN
// addTwoNumbers(3,9)   
// addTwoNumbers(3,"9")   
// addTwoNumbers(3,"a")   
// addTwoNumbers(3,null)   

// function addTwoNumbers(num1,num2)
// {
//     console.log("sheri")  
//     return num1 + num2
    // console.log("sheri")  after return it does not execute the code
// }

// const result = addTwoNumbers(4,6)
// console.log(result)

// function loggedIn(username)                            //= "sheharyar")
// {
//     if(!username)
//     {
//         console.log("Please enter a name ")
//         return
//     }

//     return `${username} is just logged in `
// }

// console.log(loggedIn("Asfand yar"))

// function priceCalculate(...num1)
// {
//     return num1
// }

// console.log(10,45,35) // if we pass more than one value it takes first one but we also use rest operator(also known as spread operator) to collect into bundle
// Output : 10 45 35 

// function priceCalculate(num1)
// {
//     return num1
// }

// function priceCalculate(val1, val2,...num1)
// {
//     return num1
// }

// console.log(10,45,35,78)

// const user = {
//     name: "Sheharyar",
//     price: 99
// }

// function handleObject(anyobj)
// {
//     console.log(`My name is ${anyobj.name} and price of book is ${anyobj.price}`)
// }
// handleObject(user)

// And problem we face only when we have different name like prices instead of price in previous example

// handleObject({
//     name: " asfand yar ",
//     price : 399
// })

const arr = [10,40,38]
function getArraySecondValue(arr)
{
    return arr[1]
}
// console.clear()it clears the console

console.log(getArraySecondValue(arr))