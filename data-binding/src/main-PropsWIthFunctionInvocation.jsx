import { createRoot } from "react-dom/client";

const Profile = (firstName, lastName, status, rating, address) => {
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
        {Profile('Subramanian', 'Murugan', true, 10, { city: 'Coimbatore' })}
        {Profile('Ram', 'Murugan', true, 10, { city: 'Coimbatore' })}
    </>
}

createRoot(document.getElementById('root')).render(<App />)


