import { createRoot } from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'
import { produce } from 'immer'

const Timer = props => {
    const [count, setCount] = useState(0)

    //life cycle method: where we update the count
    useEffect(() => {
        console.log('called ', count)
        // setCount(count + 1)
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    }, [])

    return <h1>{count} times rendered</h1>


}

const App = () => {
    return <>
        <Timer />

    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
