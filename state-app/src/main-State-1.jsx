import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Review extends React.Component {

  render() {
    return <div>
      <h1>Review App</h1>
    </div>
  }
}

const App = () => <Review />


createRoot(document.getElementById('root')).render(<App />)
