// const goods = ["roti" , "saalan" , "rice"]
// const cars = [ "bmw" , "gli" , "civic", "alto"]

// console.log(cars.push(goods))
// console.log(cars)  // [ 'bmw', 'gli', 'civic', 'alto', [ 'roti', 'saalan', 'rice' ] ] ---> it consider last array as element
// console.log(cars[4][0]) // roti
// // console.log(cars[5]) // If we access out of range then output is undefined.

// const things = goods.concat(cars)

// console.log(things) // oyutput : [
//   'roti', 'saalan',
//   'rice', 'bmw',
//   'gli',  'civic',
//   'alto'
// ]

// We can also use spread method that is most developers used

// const items = [...cars,...goods]  // This is called spread method that concatenate the arrays
// console.log(items)

console.log(Array.isArray(["Muhammad Sheharyar"]))
console.log(Array.isArray("Muhammad Sheharyar"))  // This method is used to check array or not

console.log(Array.from("Muhammad Sheharyar")) // This method is convert strings into array

console.log(Array.from({ name : "Muhammad Sheharyar"})) // This method does not convert object into array

// Output : []

let score1 = 1
let score2 = 2
let score3 = 3

console.log(Array.of(score1,score2,score3,score1))

console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []