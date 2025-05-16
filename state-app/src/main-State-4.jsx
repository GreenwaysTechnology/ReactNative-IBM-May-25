import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Review extends React.Component {
    state = {
        like: 0
    }
    //listener: Arrow Function
    onLike = () => {
        this.state.like += 1
        console.log(this.state)
        //call render method
        this.render()
    }

    render() {
        console.log('inside render ',this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
            <button onClick={this.onLike}>Like</button>
        </div>
    }
}

const App = () => <Review />


createRoot(document.getElementById('root')).render(<App />)
