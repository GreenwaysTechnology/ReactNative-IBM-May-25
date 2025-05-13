
const getUser = (resolve, reject) => {
    console.log('getUser is called')
    //dummyUser
    let user = {
        name: 'admin'
    }
    
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User Not found')
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    //biz
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'Login success')
    } else {
        setTimeout(reject, 1000, 'Login failed')
    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'Login success') {
        setTimeout(resolve, 1000, 'Welcome To dashboard')
    } else {
        setTimeout(reject, 1000, 'Please Retry!')
    }
}

function main() {
    getUser(user => {
        login(user, status => {
            showDashboard(status, (page) => {
                console.log(page)
            }, (err) => {
                console.log(err)
            })
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}
main()