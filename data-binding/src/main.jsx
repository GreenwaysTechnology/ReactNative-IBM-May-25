import { createRoot } from "react-dom/client";

// const Profile = (props) => {
//     return <ProfileDetails
//         firstName={props.firstName}
//         lastName={props.lastName}
//         status={props.status}
//         rating={props.rating}
//         address={props.address}
//     />
// }
//Using forwarding props syntax , you can pass down data to the child component with spread 
//operator

const Profile = props => <ProfileDetails {...props} title="Profile details" />

const ProfileDetails = props => {
    return <div>
        <h1>{props.title}</h1>
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


