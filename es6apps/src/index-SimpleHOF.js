function multiply(a = 0, b = 0) {
    return a * b
}
multiply(10, 10)
let x = 10
let y = 20
multiply(x, y)
///////////////////////////////////////////////////////////////////////////////////////

//passing function as parameter:HOF

function hello(greet) {
    greet()
}
let sayHello = function () {
    console.log('hello')
}
hello(sayHello)

hello(function () {
    console.log('hello')
})

