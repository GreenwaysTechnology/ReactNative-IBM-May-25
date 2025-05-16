import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Review extends React.Component {
    state = {
        like: 0
    }
    //listener: Arrow Function
    onLike = () => {
        //pure function with immutable code
        // this.setState(function (prvState) {
        //     //return new State Object
        //     // return {
        //     //     like: prvState.like + 1
        //     // }
        //     // return Object.assign({}, prvState, { like: prvState.like + 1 })
        //     return {
        //         ...prvState, like: prvState.like + 1
        //     }
        // })
        // this.setState((prvState) => ({
        //     ...prvState, like: prvState.like + 1
        // }))
        this.setState(({ ...this.state, like: this.state.like + 1 }))
    }
    render() {
        console.log('inside render ', this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
            <button onClick={this.onLike}>Like</button>
        </div>
    }
}

const App = () => <Review />


createRoot(document.getElementById('root')).render(<App />)
