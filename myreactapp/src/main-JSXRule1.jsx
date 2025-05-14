import { createRoot } from "react-dom/client";

const Heading = () => {
    //return <h1>Hello , React Component 
    return <h1>Hello,React Component</h1>
}

createRoot(document.getElementById('root')).render(<Heading />)


