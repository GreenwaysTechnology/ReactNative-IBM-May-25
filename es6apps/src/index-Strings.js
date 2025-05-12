//variable declration

let firstName = "Subramanian"
let lastName = 'Murugan'
//back tic notation and string interpolation
//let fullName = firstName + lastName
let fullName = `${firstName} ${lastName}`

console.log("Name" + fullName)
console.log("Name", fullName)
console.log(`Name ${fullName}`)

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)

