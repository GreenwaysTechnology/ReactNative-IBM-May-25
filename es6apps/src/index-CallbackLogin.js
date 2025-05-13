
function blockMe(message) {
    console.log(message)
}

//login
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 5000, 'login success')
    } else {
        setTimeout(reject, 5000, 'Login failed')
    }
}

function main() {
    blockMe('start')
    login('admin', 'admin', status => {
        console.log(status)
    }, err => {
        console.log(err)
    })

    login('bar', 'foo', status => {
        console.log(status)
    }, err => {
        console.log(err)
    })
    blockMe('end')
}
main()