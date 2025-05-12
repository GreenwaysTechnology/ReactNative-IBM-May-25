//array declarations

let list = ['a', 'b', 'c']
//print elements: for..each,for loop,map,filter etc...
list.forEach(item => console.log(item))

//object array

let employees = [
    { id: 1, name: 'a', salary: 1000 },
    { id: 2, name: 'b', salary: 100 },
    { id: 3, name: 'c', salary: 4000 },
    { id: 4, name: 'd', salary: 6000 },
]

employees.forEach(employee => {
    console.log(employee.id, employee.name, employee.salary)
})