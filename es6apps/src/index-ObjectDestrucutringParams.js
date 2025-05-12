//object destructuring

//without destructuring
// function printEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`name ${employee.name}`)
//     console.log(`City ${employee.address.city}`)
// }

// function printEmployee(employee) {
//     //destructure
//     const { id, name, address } = employee
//     console.log(`Id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`City ${address.city}`)
// }
function printEmployee(employee) {
    //destructure
    const { id, name, address: { city } } = employee
    console.log(`Id ${id}`)
    console.log(`name ${name}`)
    console.log(`City ${city}`)
}
printEmployee({
    id: 1, name: 'Subramanian Murugan', address: {
        city: 'Coimbatore'
    }
})