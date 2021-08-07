import { Link } from "react-router-dom";
import '../products.css'

const ProductsList = ({ products, title }) => {

    return (
        <>
            <h1>{title}</h1>
            <main className="main">
                {products.map((product, index) => {
                    return (
                        !("Vendido" in product) && <div className="grid">
                            <Link to={`/products/${index}`} className="card" key={index}>
                                <p style={{ maxWidth: "250px" }}>{product.["Item Desc"]}</p>
                                <h4>{product.LPN}</h4>
                                <h4>{product.ASIN}</h4>
                                {/*<button onClick={() => handleDisplayProducts}>Delete product</button>*/}
                            </Link>
                        </div>

                    )
                })}

            </main>
        </>
    );
}

export default ProductsList;