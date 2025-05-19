import { createRoot } from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'
import { produce } from 'immer'

const Products = props => {
    //state 
    const initialState = {
        products: [],
        isLoading: false, //to show spinner
        error: null
    }
    const [state, setState] = useState(initialState)
    //async function 
    async function getProducts() {
        try {
            const url = `https://api.escuelajs.co/api/v1/products`
            const response = await fetch(url)
            const products = await response.json()
            setState(produce(state, (draft) => {
                draft.products = products
                draft.isLoading = true
            }))
        }
        catch (err) {
            setState(produce(state, (draft) => {
                draft.err = err
                draft.isLoading = true
            }))
        }
    }
    useEffect(() => {
        //api calls
        getProducts()
    }, [])

    //conditional rendering: how to use if...else..elseif
    if (state.error) {
        return <div>
            <h1>Error : {error.message}</h1>
        </div>
    } else if (!state.isLoading) {
        return <h2>Loading...</h2>
    } else {
        return <div>
            <h1>Products</h1>
            <hr />
            <div>
                {
                    state.products.map(product => {
                        return <section>
                            <img src={product.category.image} height={200} width={200} />
                            <h1>{product.title} </h1>
                            <p>{product.description}</p>
                            <h5>{product.price}</h5>
                        </section>
                    })
                }
            </div>
        </div>
    }
}

const App = () => {
    return <>
        <Products />
    </>
}

createRoot(document.getElementById('root')).render(<App />)