import { createRoot } from 'react-dom/client'

const Welcome = () => <h1>Welcome</h1>
const GoodBye = () => <h1>GoodBye</h1>

// const Dashboard = props => {

//     if (props.status) {
//         return <h1>Welcome</h1>
//     } else {
//         return <h1>GoodBye</h1>
//     }

// }
// const Dashboard = props => {
//     if (props.status) {
//         return <Welcome />
//     } else {
//         return <GoodBye />
//     }
// }
const Dashboard = props => {
    return props.status ? <Welcome /> : <GoodBye />
}

const App = () => {
    return <>
        <Dashboard status={true} />
        <Dashboard status={false} />

    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
