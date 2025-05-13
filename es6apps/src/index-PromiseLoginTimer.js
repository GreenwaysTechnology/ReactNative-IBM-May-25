
function blockMe(message) {
    console.log(message)
}


function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login succcess')
            //any callback based api like ajax api or web socket
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(result => console.log(result))
        .catch(err => console.log(err))
    blockMe('end')
}
main()