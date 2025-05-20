import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from "react"

const Counter = () => {
  //state declaration
  const [count, setCount] = useState(0)
  //biz logic
  const onIncrement = () => {
    setCount(count + 1)
  }
  //ui logic
  return <div>
    <h1>Count {count}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
}

const App = () => {
  return <div>
        <Counter/>
  </div>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
