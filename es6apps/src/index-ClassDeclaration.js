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
//create object
//emp is just variable
//new is memory allocation operator
//Employee() is Constructor call
let emp = new Employee()
console.log(emp)
console.log(emp.id,emp.name,emp.salary,emp.calculate(),emp.calculateTax())