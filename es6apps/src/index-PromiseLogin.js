
function blockMe(message) {
    console.log(message)
}

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    }
    return Promise.reject('login failed')
}

function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(result => console.log(result))
        .catch(err => console.log(err))
    blockMe('end')
}
main()