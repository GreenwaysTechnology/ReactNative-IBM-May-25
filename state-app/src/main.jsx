import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { produce } from 'immer'

class ProductsRestAPI extends React.Component {
    //Declare state:
    state = {
        products: [],
        error: null,
        isLoading: false
    }

    //override componentDidMount
    async componentDidMount() {
        //api call
        try {
            const url = `https://api.escuelajs.co/api/v1/products`
            const response = await fetch(url, { method: 'GET' })
            const products = await response.json()
            console.log(products)
            //call setState to initalize the data with state
            this.setState(produce(this.state, draft => {
                draft.products = products
                draft.isLoading = true
            }))
        }
        catch (err) {
            console.log(err)
            this.setState(produce(this.state, (draft) => {
                draft.error = err
                draft.isLoading = true
            }))
        }

    }

    render() {
        const { products, isLoading, error } = this.state
        if (error) {
            return <div>
                <h1>Error : {error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h1>Loading...</h1>
        } else {
            return <div>
                <h1>Products</h1>
                <hr />
                <div>
                    {
                        products.map(product => {
                            return <section key={product.id}>
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
}

const App = () => <ProductsRestAPI />


createRoot(document.getElementById('root')).render(<App />)
