//the dom element creating using react
import { createRoot } from "react-dom/client";

//const Heading = document.createElement('h1')
//    Heading.innerHTML = 'Hello,React!'
const Heading = <h1>Hello, React!</h1>

const rootElement = document.getElementById('root')

//rootElement.appendChild(Heading)
createRoot(rootElement).render(Heading)



