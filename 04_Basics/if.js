// const score = 98

// if (score <= 100 && score >= 90) {
//     console.log("You got an A!");
// } else if (score < 90 && score >= 80) {
//     console.log("You got a B!");
// } else if (score < 80 && score >= 70) {
//     console.log("You got a C!");
// } else if (score < 70 && score >= 60) {
//     console.log("You got a D!");
// } else {
//     console.log("You got an F!");
// }

// const score = 98
// if(score >=90) console.log("You got an A!"),
// console.log("You are a superstar!")

const loggedIn = true
const isAdmin = true

if (loggedIn && isAdmin) {
    console.log("You have full access")
}

else if (loggedIn || isAdmin) {
    console.log("You have limited access")
}
else {
    console.log("You have no access")
}