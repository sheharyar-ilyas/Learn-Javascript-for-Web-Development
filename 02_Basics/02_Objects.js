// Object create using constructors

// const obj = new Object()
// obj.name = "sheharyar"
// obj.id = 839
// obj.email = "star@gmail.com"
// console.log(obj)

const obj2 = {
    name : "ahmad",
    fullname:{
      username:{
        firstname: "sheharyar",
        secondname: "ilyas"
      }
    }
}

// console.log(obj2.fullname.username.secondname)

// const obj3 = {1:'a', 2:'b'}
// const obj4 = {3:'a', 4:'b'}
// const obj5 = {5:'a', 6:'b'}

// const obj6 = Object.assign({},obj3,obj4,obj5)  // whenever we use assign the syntax for this is Object.assign(target, source) and for target we use empty paranthesis {}
// we can also spread method
// const obj6 = {...obj3,...obj4,...obj6}
// console.log(obj6)

// console.log(Object.keys(obj2))
// console.log(Object.values(obj2))
console.log(Object.entries(obj2.fullname.username.firstname[0])) // Output:[ [ '0', 's' ] ]

console.log(Object.hasOwnProperty(obj2.fullname))
// const arr = [
//     {
//         id: 1,
//         email:"sheharyar1@gmail.com"
//     },
//     {
//         id: 2,
//         email:"sheharyar2@gmail.com"
//     },
//     {
//         id: 3,
//         email:"sheharyar3@gmail.com"
//     }
// ]

// console.log(arr[0].id)

const obj = {
    email: "user@example.com",
    price: "100",
    course: "JavaScript"
}

console.log(obj.email);
console.log(obj.price);
console.log(obj.course);

const {email : e, price : p, course : c} = obj;
console.log(e);
console.log(p);
console.log(c);
