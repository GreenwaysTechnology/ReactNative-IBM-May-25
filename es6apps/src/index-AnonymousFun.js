//how to declare function and into variables

function sayHello() {
    return "Hello"
}
sayHello()


//a is variable, 10 is value(literal)
let a = 10
//anonymous function
// hai is variable, function(){} is value (literal)
let hai = function () {
    console.log('hai')
}
hai()

//anonymous function with parameters and returns

let multiply = function (a = 0, b = 0) {
    return a * b
}
console.log(multiply(10,19))
