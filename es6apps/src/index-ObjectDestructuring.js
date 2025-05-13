// function getStock() {
//     return {
//         id: 1,
//         name: 'google',
//         price: 1000,
//         qty: 100
//     }
// }
// console.log(getStock())


// function getStock(id, name, price, qty) {
//     return {
//         id: id,
//         name: name,
//         price: price,
//         qty: qty
//     }
// }
// console.log(getStock(2, 'ms', 3455, 100))

// function getStock(id = 1, name = '', price = 0, qty = 0) {
//     return {
//         id: id,
//         name: name,
//         price: price,
//         qty: qty
//     }
// }
// console.log(getStock())
// console.log(getStock(2, 'ms', 3455, 100))

// function getStock(id = 1, name = '', price = 0, qty = 0) {
//     return {
//         id,
//         name,
//         price,
//         qty
//     }
// }

// const getStock = (id = 1, name = '', price = 0, qty = 0) => {
//     return {
//         id,
//         name,
//         price,
//         qty
//     }
// }
const getStock = (id = 1, name = '', price = 0, qty = 0) => ({
    id,
    name,
    price,
    qty
})

console.log(getStock())
console.log(getStock(2, 'ms', 3455, 100))