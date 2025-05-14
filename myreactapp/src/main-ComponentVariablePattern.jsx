import { createRoot } from "react-dom/client";

//Here Heading variable which points Object internally,
//Heading variable holds component(Object/dom element)

//This component is created using variable : variable pattern
const Heading = <h1>Hello, React!! How are you?</h1>

createRoot(document.getElementById('root')).render(Heading)



