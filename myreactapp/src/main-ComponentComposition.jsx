import { createRoot } from "react-dom/client";

const MenuContent = () => <>
    <li>Home</li>
    <li>ContactUs</li>
    <li>Services</li>
</>

const MenuItem = () => <ul>
    <MenuContent />
</ul>

const MenuBar = () => {
    return <nav>
        <MenuItem />
    </nav>
}
//Header
const Header = () => {
    return <header>
        <h1>Header</h1>
        <MenuBar />
    </header>
}
const Footer = () => {
    return <footer>
        <h2>Footer</h2>
    </footer>

}
const Body = () => {
    return <div>
        <p>This is body</p>
    </div>
}
const Page = () => {
    return <div>
        <Header />
        <Body />
        <Footer />
    </div>
}

//create Root Component
const App = () => {
    return <Page />
}

createRoot(document.getElementById('root')).render(<App />)


