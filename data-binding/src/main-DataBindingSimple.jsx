import { createRoot } from "react-dom/client";


const Profile = () => {
    //declare data 
    let firstName = 'Subramanian'
    let lastName = 'Murugan'
    let status = true
    let rating = 10
    let address = {
        city: 'Coimbatore'
    }

    return <div>
        <h1>First Name : {firstName}</h1>
        <h1>LastName : {lastName}</h1>
        <h2>Status : {status ? "Available" : "Not Available"}</h2>
        <h3>Rating: {rating}</h3>
        <h3>Address : {address.city}</h3>
    </div>
}


const App = () => {
    return <>
        <Profile />
    </>
}

createRoot(document.getElementById('root')).render(<App />)


