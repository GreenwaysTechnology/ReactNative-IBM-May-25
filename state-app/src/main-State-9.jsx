import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        },
        x: 1,
        y: 2
    }
    onLike = () => {
        this.setState((prvState) => {
            return {
                ...prvState, //level 0 copy : copy all properties from the state 
                house: {
                    ...prvState.house, // Level 1 copy : copy all properties from the house
                    points: prvState.house.points + 2
                }
            }
        })
    }
    render() {
        return <div>
            <h1>Review App</h1>
            <h2>Name : {this.state.house.name}</h2>
            <h3>Points : {this.state.house.points}</h3>
            <button onClick={this.onLike}>Like</button>

        </div>
    }
}

const App = () => <Review />


createRoot(document.getElementById('root')).render(<App />)
