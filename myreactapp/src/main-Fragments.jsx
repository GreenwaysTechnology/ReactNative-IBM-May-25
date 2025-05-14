// import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";

//with Root Element
// const Heading = () => {
//     return <div>
//         <h1>Hello,React Component</h1>
//         <p>This is something</p>
//     </div>
// }
//With Fragement
// const Heading = () => {
//     return <React.Fragment>
//         <h1>Hello,React Component</h1>
//         <p>This is something</p>
//     </React.Fragment>
// }
// const Heading = () => {
//     return <Fragment>
//         <h1>Hello,React Component</h1>
//         <p>This is something</p>
//     </Fragment>
// }
const Heading = () => {
    return <>
        <h1>Hello,React Component</h1>
        <p>This is something</p>
    </>
}


createRoot(document.getElementById('root')).render(<Heading />)


