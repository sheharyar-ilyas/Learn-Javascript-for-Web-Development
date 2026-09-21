
// const nums = [1,2,4,4,5,6,7,7,8,9,6]

//  const newnums = nums.forEach( (n) => n > 4)
//  console.log(newnums)  // Ouput: undefined So we use filter instead of this 
// const newnums = []
// nums.forEach( (n) => {
//     if(n>2)
//     {
//         newnums.push(n)
//     }
// })
// console.log(newnums)

// const newnums = nums.filter( (n) => n > 4)
// console.log(newnums)
// const newnums = nums.filter( (n) => 
//     {
//        return n > 4
//     }
// )
// console.log(newnums)
// If we open the scope mean curly braces then we must add the return keyword
// [
//   5, 6, 7, 7,
//   8, 9, 6
// ]

// const nums = [1,2,4,4,5,6,7,7,8,9,6]
// // const Nnums = nums.map( (n) => n*3)

// const Nnums = nums
//                     .map( (n) => n*3)
//                     .map( (n) => n+1)
//                     .filter( (n) => n>=10)

// console.log(Nnums)

// const num = [2,3,5];

// // const total = num.reduce(function(acc,curr){
// //     return acc + curr;
// // }, 7);
// const total = num.reduce((acc,curr)=>{
//     return acc + curr;
// }, 1);

// console.log(total);

const shoppingbooks = [
    {
        itemname: " js course ",
        price: 900
    },
    {
        itemname: " data science course ",
        price: 900
    },
    {
        itemname: " c++ course ",
        price: 9000
    },
    {
        itemname: " python course ",
        price: 1000
    }
]

const price = shoppingbooks.reduce( (acc,item) => {
    console.log(`total books are ${item.itemname}`)
    return acc + item.price
},0)
console.log(price)