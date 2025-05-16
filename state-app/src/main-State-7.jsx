import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 10
    }
    render() {
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like} Dislike:{this.state.dislike}</h2>
            {/* Inline Listener syntax */}
            <button onClick={() => {
                this.setState(({ ...this.state, like: this.state.like + 1 }))
            }}>Like</button>
            <button onClick={() => {
                this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))
            }}>Dislike</button>
        </div>
    }
}

const App = () => <Review />


createRoot(document.getElementById('root')).render(<App />)
