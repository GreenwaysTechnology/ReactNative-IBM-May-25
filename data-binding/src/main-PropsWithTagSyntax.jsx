import { createRoot } from "react-dom/client";

//props is not keyword but it is variable holds the properties as object
const Profile = (props) => {
    console.log(props)
    return <div>
        <h1>First Name : {props.firstName}</h1>
        <h1>LastName : {props.lastName}</h1>
        <h2>Status : {props.status ? "Available" : "Not Available"}</h2>
        <h3>Rating: {props.rating}</h3>
        <h3>Address : {props.address.city}</h3>
    </div>
}

const App = () => {
    return <>
        <Profile
            firstName='Subramaian'
            lastName="Murugan"
            status={true}
            address={{ city: 'Coimbatore' }}
            rating={10}
        />
        <Profile
            firstName='Ram'
            lastName="Murugan"
            status={true}
            address={{ city: 'Coimbatore' }}
            rating={8}
        />
        <Profile
            firstName='Geetha'
            lastName="Subramanian"
            status={true}
            address={{ city: 'Coimbatore' }}
            rating={8}
        />
    </>
}

createRoot(document.getElementById('root')).render(<App />)


