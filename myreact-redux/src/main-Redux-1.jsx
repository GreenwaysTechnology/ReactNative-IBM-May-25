import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

////////////////////////////////Redux Layer/////////////////////////////////////////////
//Redux: Reducer: pure function
const CounterReducer = (count = 100, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            //return new state:
            return count + 1
        case 'counter/decrement':
            //return new state:
            return count - 1
        default:
            //return initalState
            return count
    }
}
//create Store Object // kick start redux engine
const store = configureStore({
    reducer: {
        //NameofReducer:Redurcer Reference
        counter: CounterReducer,
    }
})

/////////////////////////React Layer////////////////////////////////////////////////////////////
const Counter = (props) => {
    //invoke Counter Reducer from Here
    //you have to access state here , defined inside reducer
    const count = useSelector(appState => {
        return appState.counter
    })

    // get Dispatacher
    const dispatch = useDispatch()

    //listener 
    const onIncrement = evt => {
        //invoke redux 'reducer': via dispatcher by passing action object
        let incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }
    return <div>
        <h1>Count : {count}</h1>
        <button onClick={onIncrement}>+</button>
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
