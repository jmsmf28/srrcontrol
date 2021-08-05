import ProductsList from './ProductsList/ProductsList';
import useFetch from '../../useFetch'

function Products() {
    const { data: products, isLoading, error } = useFetch('http://localhost:8000/products')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {products && <ProductsList products={products} title={'All products'} />}
        </div>
    )
}

export default Products
