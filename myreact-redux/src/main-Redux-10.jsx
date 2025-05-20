import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore, createReducer, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

// const CounterReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(counterIncrement, (state, action) => {
//             state.value += 1
//         })
//         .addDefaultCase((state, action) => { })
// })

let initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state, action) {
            //immutable code via immer js
            state.value++
        },
        decrement(state, action) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    }
})
//extract reducers,actions from the slice
//extract slice
const CounterReducer = counterSlice.reducer
//extract actions
const { increment, decrement, incrementBy } = counterSlice.actions


const store = configureStore({
    reducer: {
        //NameofReducer:Redurcer Reference
        counter: CounterReducer
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
            dispatch({ type: increment })
        }}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: incrementBy, payload: 100 })
        }}>incrementBy</button>
    </div>
}


const App = () => {
    return <Provider store={store}>
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
