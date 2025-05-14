import { createRoot } from "react-dom/client";

//component composition

const Hello = () => {
    return <h1>Hello</h1>
}
const Hai = () => {
    return <h1>Hai</h1>
}

const Greeter = () => {
    return <div>
        <Hai />
        <Hello />
    </div>
}

//create Root Component
const App = () => {
    return <Greeter />
}

createRoot(document.getElementById('root')).render(<App />)


