import { Link } from "react-router-dom";
import '../products.css'

const ProductsList = ({ products, title }) => {

    return (
        <>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <main className="main">
                {products.map((product, index) => {
                    let productTitle = ('' + product.["Item Desc"]).slice(0, 40)
                    //console.log(productTitle)
                    return (
                        !("Vendido" in product) && <div className="grid">
                            <Link to={`/products/${index}`} className="card" key={index}>
                                <p style={{ maxWidth: "250px" }}>{productTitle}</p>
                                <h4>{product.LPN}</h4>
                                <h4>{product.ASIN}</h4>
                                <button>{product.["Valor Venda"]}€</button>
                                {/*<h4>{product.["Estado"]}</h4>*/}
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