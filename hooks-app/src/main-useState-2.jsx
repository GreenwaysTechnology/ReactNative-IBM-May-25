import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react'

const Counter = props => {
    const [increment, setIncrement] = useState(0)
    const [decrement, setDecrement] = useState(100)
    return <div>
        <h1>Counter App</h1>
        <h1>Increment Value: {increment} Decrement Value:{decrement}</h1>
        <button onClick={() => { setIncrement(increment + 1) }}>+</button>
        <button onClick={() => { setDecrement(decrement - 1) }}>-</button>
    </div>
}

const App = () => {
    return <>
        <Counter />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
