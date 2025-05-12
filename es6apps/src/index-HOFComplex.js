//HOF with args and parameters

function hello(greet) {
    greet('hello')
}

hello(function (message) {
    console.log(message)
})

//complex hof
function login(userName, password, success, failure) {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}

login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})