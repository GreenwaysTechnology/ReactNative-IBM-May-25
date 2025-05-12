//class declaration
class Employee {
    //instance variables
    id
    name
    salary
    constructor(id = 0, name = '', salary = 0) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    //instance methods
    calculate() {
        return 10
    }
    calculateTax = () => 100
}
let emp = new Employee(1, 'Subramanian', 10000)
console.log(emp)
console.log(emp.id, emp.name, emp.salary, emp.calculate(), emp.calculateTax())