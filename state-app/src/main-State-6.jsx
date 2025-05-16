import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Review extends React.Component {
    state = {
        like: 0
    }
    // onLike = () => {
    //       this.setState(({ ...this.state, like: this.state.like + 1 }))
    // }
    render() {
        console.log('inside render ', this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
            {/* Inline Listener syntax */}
            <button onClick={() => {
                this.setState(({ ...this.state, like: this.state.like + 1 }))
            }}>Like</button>
        </div>
    }
}

const App = () => <Review />


createRoot(document.getElementById('root')).render(<App />)
