import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

const CounterReducer = (count = { value: 100 }, action) => {
    switch (action.type) {
        case 'counter/increment':
            return { ...count, value: count.value + 1 }
        default:
            return count
    }
}
const store = configureStore({
    reducer: {
        //NameofReducer:Redurcer Reference
        counter: CounterReducer,
    }
})

const Counter = (props) => {
     const count = useSelector(appState => {
        return appState.counter
    })
    const dispatch = useDispatch()
    return <div>
        <h1>Count : {count.value}</h1>
        <button onClick={() => {
            dispatch({ type: 'counter/increment' })
        }}>+</button>
    </div>
}

const App = () => {
    return <Provider store={store}>
        {/* You have to render any component */}
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
