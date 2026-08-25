// Arrays

// let myArr = [0,2,34,56,35]
// console.log(myArr)
// console.log(typeof myArr)  // JavaScript array-copy operations create shallow copies.

// console.log(myArr[0])
// shallow copy : in which copy share the same reference 
// deep copy : in which copy do not share the same reference 

// let myAnotherArr = [01, true , "Sheharyar",0.2]
// console.log(myAnotherArr[2])

// let Arr = new Array(1,2,34,56,654,"ALi")
// console.log(Arr[(Arr.length-1)])

// Array Methods

let num = [44,55,3334,55,322]

// num.push(23)  //Adds
// num.pop()     // remove last one
// console.log(num)

// num.unshift(89)
// num.shift()
// console.log(num.includes(3334))  // check if the element is present or not
// console.log(num.indexOf(55))  // returns the index of the element

console.log(num.join())   // Bydefault separator in this is comma (,) join(separator)
//If array.length is 0, the empty string is returned.
console.log(typeof num)
console.log(num.join("-"))  
console.log(num.join("*"))  



