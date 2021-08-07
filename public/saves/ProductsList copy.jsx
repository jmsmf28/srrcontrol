import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import styles from './../products.css'

const ProductsList = ({ products, title }) => {

    return (
        <>
            <div className={styles.grid}>
                <h1>{title}</h1>

                {products.map((product, index) => {
                    if (!("Vendido" in product)) {
                        return (

                            <Link to={`/products/${index}`} className={styles.card}>
                                <p>{product.["Item Desc"]}</p>
                                <h3>{product.LPN}</h3>
                                <h3>{product.ASIN}</h3>
                                {/*<button onClick={() => handleDisplayProducts}>Delete product</button>*/}
                            </Link>

                        )
                    } else { return console.log('FFFF') }
                })
                }

            </div>
        </>
    );
}

export default ProductsList;