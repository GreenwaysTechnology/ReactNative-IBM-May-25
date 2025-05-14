import { createRoot } from "react-dom/client";

const heading = () => {
    return <div>
        <h1>Hello,React Component</h1>
        <p>This is something</p>
    </div>
}

createRoot(document.getElementById('root')).render(<heading />)


