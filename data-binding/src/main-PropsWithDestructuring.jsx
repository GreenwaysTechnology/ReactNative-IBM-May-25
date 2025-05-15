import { createRoot } from "react-dom/client";

// const Profile = (props) => {
//     const { firstName, lastName, status, rating, address } = props
//     return <div>
//         <h1>First Name : {firstName}</h1>
//         <h1>LastName : {lastName}</h1>
//         <h2>Status : {status ? "Available" : "Not Available"}</h2>
//         <h3>Rating: {rating}</h3>
//         <h3>Address : {address.city}</h3>
//     </div>
// }
// const Profile = (props) => {
//     const { firstName, lastName, status, rating, address:{city} } = props
//     return <div>
//         <h1>First Name : {firstName}</h1>
//         <h1>LastName : {lastName}</h1>
//         <h2>Status : {status ? "Available" : "Not Available"}</h2>
//         <h3>Rating: {rating}</h3>
//         <h3>Address : {city}</h3>
//     </div>
// }

const Profile = ({ firstName, lastName, status, rating, address: { city } }) => <div>
    <h1>First Name : {firstName}</h1>
    <h1>LastName : {lastName}</h1>
    <h2>Status : {status ? "Available" : "Not Available"}</h2>
    <h3>Rating: {rating}</h3>
    <h3>Address : {city}</h3>
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


