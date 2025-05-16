//Rule B

//whether this function is pure or not : impure function
// function updateProfile(city,profile) {
//   //biz logic
//    profile.city = city 
//    return profile
// }

//pure function with immutabilty: return new Object every time.

//plain js : 
function updateProfile(city, profile) {
    //return plain
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }
    //using object.assign
    //  return Object.assign({}, profile, { city: city })

    //es 7 spread operator
    return {
        ...profile,
        city: city
    }

}

let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Delhi'
}

console.log('Before Update', profile)
let updatedObject = updateProfile('Coimbatore', profile)
console.log(profile === updatedObject ? "Same Object" : "Different Object")
console.log('After Update', updatedObject)