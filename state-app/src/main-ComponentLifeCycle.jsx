import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

class Parent extends React.Component {
    constructor() {
        super()
        console.log('Parent constructor is called')
    }
    render() {
        console.log('Parent Render is called')
        return <>
            <h1>Parent</h1>
            <Child />
        </>
    }
    componentDidMount() {
        console.log('Parent componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Parent componentDidUpdate is called')

    }
}

class Child extends React.Component {
    constructor() {
        super()
        console.log('Child constructor is called')
    }
    render() {
        console.log('Child Render is called')
        return <>
            <h1>Child</h1>
        </>
    }
    componentDidMount() {
        console.log('Child componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate is called')

    }
}

const App = () => <Parent />


createRoot(document.getElementById('root')).render(<App />)