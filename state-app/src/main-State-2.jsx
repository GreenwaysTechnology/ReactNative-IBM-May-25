import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Review extends React.Component {
    state = {
        like:0
    }

    render() {
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
        </div>
    }
}

const App = () => <Review />


createRoot(document.getElementById('root')).render(<App />)
