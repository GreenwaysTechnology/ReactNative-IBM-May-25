import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//action constant
const counterIncrement = 'counter/increment'
const bankDeposit = 'bank/deposit'

const CounterReducer = (count = { value: 100 }, action) => {
    switch (action.type) {
        case counterIncrement:
            return produce(count, (draft) => {
                draft.value += 1
            })
        default:
            return count
    }
}
const BankReducer = (amount = { value: 0 }, action) => {
    switch (action.type) {
        case bankDeposit:
            return produce(amount, (draft) => {
                draft.value += action.payload
            })
        default:
            return amount
    }
}
const store = configureStore({
    reducer: {
        //NameofReducer:Redurcer Reference
        counter: CounterReducer,
        bank: BankReducer
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
            dispatch({ type: counterIncrement })
        }}>+</button>
    </div>
}
const Bank = (props) => {
    const amount = useSelector(appState => {
        return appState.bank
    })
    const dispatch = useDispatch()
    return <div>
        <h1>Amount  : {amount.value}</h1>
        <button onClick={() => {
            dispatch({ type: bankDeposit, payload: 1000 })
        }}>Deposit</button>
    </div>
}

const App = () => {
    return <Provider store={store}>
        <Counter />
        <hr />
        <Bank />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
