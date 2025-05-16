import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { produce } from 'immer'

class Review extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }
    onLike = () => {
        // this.setState((prvState) => {
        //     return produce(prvState, (draft) => {
        //         draft.house.points += 1
        //     })
        // })
        // this.setState((prvState) => produce(prvState, (draft) => {
        //     draft.house.points += 1
        // }))
        this.setState(produce(this.state, (draft) => {
            draft.house.points += 1
        }))

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
