//old- es5 version of function

let add = function (a = 0, b = 0) {
    console.log(`Result is ${a + b}`)
}
add(10, 10)

//arrow functions
let multiply = (a = 0, b = 0) => {
    console.log(`Result is ${a + b}`)
}
multiply(20, 34)

//arrow function with only line of body: we can remove {}

multiply = (a = 0, b = 0) => console.log(`Result is ${a + b}`)
multiply(20, 34)

//arrwo function with return statement

multiply = (a = 0, b = 0) => {
    return a * b
}
console.log(multiply(20, 34))

//arrow  function with only return statement.remove return statement and {} braces
multiply = (a = 0, b = 0) => a * b
console.log(multiply(20, 34))