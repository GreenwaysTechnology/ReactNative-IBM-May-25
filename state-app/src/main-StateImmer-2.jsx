import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { produce } from 'immer'

class Customer extends React.Component {

    state = {
        customer: {
            id: 1,
            name: 'Subramanian',
            contact: {
                address: {
                    city: 'Chennai'
                },
                communcation: {
                    mobileNo: '9000000'
                }
            }
        }
    }
    onUpdate = () => {
        this.setState(produce(this.state, (draft) => {
            draft.customer.contact.communcation.mobileNo = '6232323232'
        }))
    }
    render() {
        return <div>
            <h1>Customer info</h1>
            <h2>Name : {this.state.customer.name}</h2>
            <h2>Phone : {this.state.customer.contact.communcation.mobileNo}</h2>
            <button onClick={this.onUpdate}>UpdateMobileNo</button>
        </div>
    }
}

const App = () => <Customer />


createRoot(document.getElementById('root')).render(<App />)
