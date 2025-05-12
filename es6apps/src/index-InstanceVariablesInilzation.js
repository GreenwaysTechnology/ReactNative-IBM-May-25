//class declaration
class Employee {
    //instance variables
    id = 0
    name = ''
    salary = 0
    //instance methods
    calculate() {
        return 10
    }
    calculateTax = () => 100
}
let emp = new Employee()
emp.id = 1
emp.name = 'Subramanian'
emp.salary = 10000
console.log(emp)
console.log(emp.id, emp.name, emp.salary, emp.calculate(), emp.calculateTax())