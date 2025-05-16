import { createRoot } from 'react-dom/client';

//Every component is  based on pure function with respect to "props"
const Welcome = props => {
    //props is read only.
    //props.message = 'Welcome'
    return <div>
        <h1>{props.message}</h1>
    </div>
}

const App = () => {
    return <>
        <Welcome message="hello" />
    </>
}


createRoot(document.getElementById('root')).render(<App />);
