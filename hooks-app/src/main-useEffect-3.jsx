import { createRoot } from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'

const Counter = props => {
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    //componentDidUpdate
    useEffect(() => {
        setCalculation(calculation + 2)
    }, [count])

    return <>
        <h1>Count : {count}</h1>
        <h1>Calculation : {calculation}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>

    </>

}

const App = () => {
    return <>
        <Counter />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
