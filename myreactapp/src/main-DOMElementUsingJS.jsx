//create dom element using plain js
function createElement() {
    //create h1 Object
    const Heading = document.createElement('h1')
    //set properties
    Heading.innerHTML = 'Hello,React!'
    //Get the parent element on which you attach this child element
    const rootElement = document.getElementById('root')
    //attach this child element with parent
    rootElement.appendChild(Heading)
}
createElement()