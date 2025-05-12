//base class

class Account {
    constructor() {
        console.log('Account')
    }
    deposit() {
        return 0
    }
}

class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('SavingsAccount')
    }
    deposit() {
        return 100
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())