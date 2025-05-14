import { createRoot } from "react-dom/client";

// function Heading() {
//     //return JSX Element
//     return <h1>Hello , React Component</h1>
// }

// const Heading = () => {
//     //return JSX Element
//     return <h1>Hello , React Component</h1>
// }
const Heading = () => <h1>Hello , React Component</h1>

// createRoot(document.getElementById('root')).render(Heading())

// createRoot(document.getElementById('root')).render(<Heading></Heading>)
createRoot(document.getElementById('root')).render(<Heading/>)


