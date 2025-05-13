
const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }

        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User Not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        //biz
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'Login success')
        } else {
            setTimeout(reject, 1000, 'Login failed')
        }
    })
}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'Login success') {
            setTimeout(resolve, 1000, 'Welcome To dashboard')
        } else {
            setTimeout(reject, 1000, 'Please Retry!')
        }
    })
}

function main() {
    //callback based
    // getUser(user => {
    //     login(user, status => {
    //         showDashboard(status, (page) => {
    //             console.log(page)
    //         }, (err) => {
    //             console.log(err)
    //         })
    //     }, err => {
    //         console.log(err)
    //     })
    // }, err => {
    //     console.log(err)
    // })
    //promise with nesting
    // getUser()
    //     .then(user => {
    //         //call login
    //         login(user).then(status => {
    //             //call dashboard
    //             showDashboard(status)
    //                 .then(page => console.log(page))
    //                 .catch(err => console.log(err))
    //         }).catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashboard(status)
    //     })
    //     .then(page=>{
    //         console.log(page)
    //     })
    //     .catch(err => console.log(err))

    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(page => console.log(page))
        .catch(err => console.log(err))
}
main()