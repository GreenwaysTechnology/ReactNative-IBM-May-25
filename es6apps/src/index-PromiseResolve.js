
function blockMe(message) {
    console.log(message)
}

function getMessage() {
    return Promise.resolve('Hello')
}

function main() {
    blockMe('start')
    getMessage().then(result => console.log(result)).catch(err => console.log(err))
    blockMe('end')
}
main()