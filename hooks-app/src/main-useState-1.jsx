import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react'

const Counter = props => {
    //state = {counter:0}
    const [counter, setCounter] = useState(0)

    //listener
    // const onIncrement = () => {
    //     //write logic
    //     // setCounter(function (prevState) {
    //     //     return prevState + 1
    //     // })
    //     // setCounter((prevState) => {
    //     //     return prevState + 1
    //     // })
    //     // setCounter((prevState) => prevState + 1)
    //     setCounter(counter + 1)

    // }

    return <div>
        <h1>Counter App</h1>
        <h1>Counter: {counter}</h1>
        {/* <button onClick={onIncrement}>+</button> */}
        <button onClick={() => { setCounter(counter + 1) }}>+</button>
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
