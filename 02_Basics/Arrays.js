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

// let num = [44,55,3334,55,322]

// num.push(23)  //Adds
// num.pop()     // remove last one
// console.log(num)

// num.unshift(89)
// num.shift()
// console.log(num.includes(3334))  // check if the element is present or not
// console.log(num.indexOf(55))  // returns the index of the element

// console.log(num.join())   // Bydefault separator in this is comma (,) join(separator)
// //If array.length is 0, the empty string is returned.
// console.log(typeof num)
// console.log(num.join("-"))  
// console.log(num.join("*"))  


// let arr = [1,3,5,6,"happy"]
// let arr1 = [3,5,6,"lahore"]
// console.log(arr.concat(arr1,[1,[344,67]]));

// // copyWithin(target, start)
// // copyWithin(target, start, end)

// Parameters
// target: The index position (zero-based) where the copied sequence is pasted.
// start: The index position where copying begins (defaults to 0).
// end: The index position where copying stops 

// console.log(arr.copyWithin(0,2,4))
// console.log(arr)

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat());
// // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

// const myArr = [2,4,56,23,55,22,664,88]
// const arr1 = myArr.slice(1,4)   // It temporarily changes the array
// console.log(arr1)
// console.log(myArr)
// const arr2 = myArr.splice(1,4)  // It permanently changes the array
// console.log(arr2)
// console.log(myArr)
// console.log(myArr.toSorted(compareFn))


// const colors = ["red", "blue", "green"];

// // Replace "blue" (index 1) with "yellow" without changing the original array
// const newColors = colors.with(1, "yellow");

// console.log(newColors); // Output: ["red", "yellow", "green"]
// console.log(colors);    // Output: ["red", "blue", "green"] (Original stays the same!)
