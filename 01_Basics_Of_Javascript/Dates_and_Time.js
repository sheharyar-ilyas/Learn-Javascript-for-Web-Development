let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toJSON())
console.log(date.toDateString())
console.log(typeof date)

let createdDate = new Date(2026,1,24)
console.log(createdDate)   
console.log(createdDate.toDateString())  // For info: in javascript month start at 0 mean 0 indicates january

let createdDateInString = new Date("2026-1-24") // In this case month start at 1 mean 1 indicates january
console.log(createdDateInString.toDateString()) 
let myTimestamp = Date.now() // It will return the timestamp in milliseconds
console.log(myTimestamp) 
console.log(new Date(myTimestamp).toDateString()) // It will convert timestamp to date
console.log(new Date(myTimestamp).toLocaleString()) // It will convert timestamp to date and time

console.log(new Date(myTimestamp).toLocaleTimeString()) // It will convert timestamp to time
console.log(Math.floor(myTimestamp/1000)) // It will return the timestamp in seconds

console.log(createdDate.getTime()) // It will return the timestamp in milliseconds of createdDate

console.log(createdDate.getTime()/1000) // It will return the timestamp in seconds of createdDate
console.log(Math.floor(createdDate.getTime()/1000)) // It will return the timestamp in seconds of createdDate
console.log(createdDate.getFullYear()) // It will return the year of createdDate
console.log(createdDate.getMonth()) // It will return the month of createdDate (0-11)