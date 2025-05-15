import { createRoot } from 'react-dom/client'
import { PRODUCTS } from './mock-data/products'

const ProductDetails = props => {
    return <section>
        <h1>{props.product.id}</h1>
        <h2>{props.product.title}</h2>
        <img src={props.product.image} height={300} width={300} />
        <p>{props.product.description}</p>
        <h3>Price: {props.product.price} Category : {props.product.category} Rating: {props.product.rating.rate}</h3>
    </section>
}

const ProductList = ({ data }) => {
    // return <div>
    //     {
    //         data.map(product => {
    //             return <ProductDetails product={product} />
    //         })
    //     }
    // </div>
    return <div>
        {
            data.map(product => <ProductDetails key={product.id} product={product} />)
        }
    </div>

}

const App = () => {

    return <>
        <ProductList data={PRODUCTS} />
    </>
}

createRoot(document.getElementById('root')).render(
    <App />
)
