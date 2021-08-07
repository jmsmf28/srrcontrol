import ProductsList from './ProductsList/ProductsList'
import useFetch from '../../useFetch'
import styles from './products.css'

function Products() {
    const { data: products, isLoading, error } = useFetch('http://localhost:8000/products')

    return (
        <div className={styles.container}>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {products && <ProductsList products={products} title={'All products'} />}
        </div>
    )
}

export default Products
