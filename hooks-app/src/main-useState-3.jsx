import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react'

const Counter = props => {
    const [increment, setIncrement] = useState(props.incrementInitValue)
    const [decrement, setDecrement] = useState(props.decrementInitValue)
    return <div>
        <h1>Counter App</h1>
        <h1>Increment Value: {increment} Decrement Value:{decrement}</h1>
        <button onClick={() => { setIncrement(increment + 1) }}>+</button>
        <button onClick={() => { setDecrement(decrement - 1) }}>-</button>
    </div>
}

const App = () => {
    return <>
        <Counter incrementInitValue={0} decrementInitValue={100} />
        <Counter incrementInitValue={1} decrementInitValue={900} />
        <Counter incrementInitValue={10} decrementInitValue={2344} />
        <Counter incrementInitValue={122} decrementInitValue={1100} />
        <Counter incrementInitValue={100} decrementInitValue={600} />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
