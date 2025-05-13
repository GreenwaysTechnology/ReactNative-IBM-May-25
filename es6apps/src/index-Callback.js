
function blockMe(message) {
    console.log(message)
}
//hello is called callback function 
function sayHello(hello) {
    setTimeout(hello, 10000, 'Hello,I am delayed Message')
}
function main() {
    blockMe('start')
    // sayHello(function (message) { 
    //     console.log(message)
    // })
    sayHello(message =>console.log(message))
    blockMe('end')
}
main()