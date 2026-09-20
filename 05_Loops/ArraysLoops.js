// ["", "",""]
// [{},{}.{}]

// ************************** For of loop ***********************************

// const arr = [1,20,3,4,5]
// for (const i of arr) {
//     console.log(`The value of arr is ${i}`)
// }

// const str = "Sheharyar Ilyas"

// for (const s of str) {
//     console.log(`The value is ${s}`)
// }

// const Mapping = new Map()

// Mapping.set("a","1")
// Mapping.set("b","2")
// Mapping.set("c","3")

// // console.log(Mapping)

// for (const [map,price] of Mapping) {
//     console.log(map, " :- ", price)
// }


// const obj = {
//     "game1" : "subway surfer",
//     "game2" : "candy crush"
// }

// for (const [key,value] of obj) {
//     console.log(key , ":-" , value)
// }  

// Output : TypeError: obj is not iterable
// Object is not iteratable using for of loop


// ************************** For in loop ***********************************

// const obj = {
//     "game1" : "subway surfer",
//     "game2" : "candy crush",
//     "game3" : "doctor driving ",
//     "game4" : "hill climb"
// }

// for (const key in obj) {
//   console.log(`${key} is shorcut for ${obj[key]}`)
// }

// const arr = ["us", "pk", "in", "tk"]

// for (const key in arr) {
//   console.log(`${arr[key]}`)   
// }


// const Mapping = new Map()

// Mapping.set("a","1")
// Mapping.set("b","2")
// Mapping.set("c","3")

// console.log(Mapping)

// for (const key in Mapping) {
//     console.log(key)
// }  Output: nothing , So we did not use for in loop in maps

// For-each loop

// const arr = ["us", "pk", "in", "tk"]

// arr.forEach(element => {
//     console.log(element)
// });
// arr.forEach((element) => {
//     console.log(element)
// });

// arr.forEach( function (val){
//     console.log(val)
// })

// function printMe(item)
// {
//     console.log(item)
// }

// arr.forEach(printMe)

// arr.forEach( (i, index, arr) => {
//     console.log(i,index, arr)
// })

const Mycoding=[
    {
        language: "javascript",
        extension: "js"
    },
    {
        language: "C++",
        extension: "cpp"
    },
    {
        language: "Python",
        extension: "py"
    }
]

Mycoding.forEach( (items) => {
    console.log(items.language)
})

