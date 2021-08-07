import ProductsList from './ProductsList/ProductsList'
import useFetch from '../../useFetch'
import './products.css'

function Products() {
    const { data: products, isLoading, error } = useFetch('http://localhost:8000/products')

    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {products && <ProductsList products={products} title={'Available products'} />}
        </div>
    )
}

export default Products
