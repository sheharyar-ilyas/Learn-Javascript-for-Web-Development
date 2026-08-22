// // const repoName = "Learn Javascript for web development"
// // const repoCount = 40

// // console.log(`This is my repo ${repoName} and total repos are ${repoCount}`) // Modern way
// // console.log('This is my repo ' + repoName + ' and total repos are ' + repoCount) // Old way

// // const name = new String("Muhammad Sheharyar")

// // console.log(name[0])
// // console.log(name.__proto__)
// // console.log(name.length)
// // console.log(name.bold())
// // console.log(name.indexOf('a')) //Output : 3
// // console.log(name.charAt(2))

// // console.log(name.substring(0,5)) //Output :Muham
// // console.log(name.slice(-17,5)) //Output :uham
// // // We also give negative values in slice method
// // let name2 = "       ali Ahmad   "
// // console.log(name2.trim())  // Trim() method : It removes extra whitespaces and line terminators
// // let url = "https://sheharyar@google.com"
// // console.log(url.replace('google','yahoo'))
// // console.log(url)
// // console.log(url.includes('sheharyar@'))

// // console.log(url.split('@')) // Output: [ 'https://sheharyar', 'google.com' ]

// // let word = 'Happy! '

// // console.log(`my words is always are ${word.repeat(3)}`)

// let word = "My name is Muhammad Sheharyar"
// let new_Word = word.padStart(100,'$') // 100 = targeted length --> This is must be greater than original string in which we use padStart() function
// console.log(new_Word)

// const str = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
// console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation