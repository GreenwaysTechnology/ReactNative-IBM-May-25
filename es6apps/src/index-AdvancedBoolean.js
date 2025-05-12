let a = 10

if (a) {
    console.log(`A is true`)
} else {
    console.log(`A is false`)
}

a = 0
if (a) {
    console.log(`A is true`)
} else {
    console.log(`A is false`)
}
a = ""
if (a) {
    console.log(`A is true`)
} else {
    console.log(`A is false`)
}
a = undefined
if (a) {
    console.log(`A is true`)
} else {
    console.log(`A is false`)
}
a = NaN
if (a) {
    console.log(`A is true`)
} else {
    console.log(`A is false`)
}

a = null
if (a) {
    console.log(`A is true`)
} else {
    console.log(`A is false`)
}