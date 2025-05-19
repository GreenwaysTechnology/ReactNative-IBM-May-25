import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react'

const Counter = props => {
    const [counter, setCounter] = useState({ increment: 0, decrement: 10 })
    const onIncrement = () => {
        //immutable logic
        // setCounter(prvState => {
        //     //return immutable object
        //     return {
        //         ...prvState,
        //         increment: prvState.increment + 1
        //     }
        // })
        // setCounter(prvState => ({
        //     ...prvState,
        //     increment: prvState.increment + 1
        // }))
        setCounter(({ ...counter, increment: counter.increment + 1 }))
    }
    return <div>
        <h1>Counter App</h1>
        <h1>Increment Value: {counter.increment} Decrement Value:{counter.decrement}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            setCounter(({ ...counter, decrement: counter.decrement - 1 }))
        }}>-</button>

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
