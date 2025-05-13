
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

async function main() {
    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashboard(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }
}
main()