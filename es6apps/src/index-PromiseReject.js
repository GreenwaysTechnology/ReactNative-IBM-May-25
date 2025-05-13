
function blockMe(message) {
    console.log(message)
}

function getError() {
    return Promise.reject('oops!')
}

function main() {
    blockMe('start')
    getError()
        .then(result => console.log(result))
        .catch(err => console.log(err))
    blockMe('end')
}
main()