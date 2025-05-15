import { createRoot } from 'react-dom/client'

const List = (props) => {

  return <ul>
          {
            props.data.map(item=>{
              return <li>{item}</li>
            })
          }
   </ul>

}

const App = () => {

  return <>
    <List data={["Subramanian", "Murugan", "Geetha"]} />
  </>
}

createRoot(document.getElementById('root')).render(
  <App />
)
