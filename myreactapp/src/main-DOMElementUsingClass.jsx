import React from "react";
import { createRoot } from "react-dom/client";


class Heading extends React.Component {
    //method
    render() {
        return <h1>Hello React!</h1>
    }
}


createRoot(document.getElementById('root')).render(<Heading />)


