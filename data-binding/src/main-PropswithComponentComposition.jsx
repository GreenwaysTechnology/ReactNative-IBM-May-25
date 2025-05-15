import { createRoot } from "react-dom/client";

export const Address = props => {
    return <>
        <h2>City: {props.address.city}</h2>
    </>
}
export const Status = props => {
    return <h2>Status : {props.status ? "Available" : "Not Available"}</h2>
}
export const Name = props => {
    return <>
        <h1>First Name : {props.firstName}</h1>
        <h1>LastName : {props.lastName}</h1>

    </>
}
export const Rating = props => {
    return <>
        <h3>Rating: {props.rating}</h3>
    </>
}


const Profile = (props) => <div>
    <Name firstName={props.firstName} lastName={props.lastName} />
    <Status status={props.status} />
    <Rating rating={props.rating} />
    <Address address={props.address} />
</div>

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


