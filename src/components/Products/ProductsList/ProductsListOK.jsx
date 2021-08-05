import { Link } from "react-router-dom";

const ProductsList = ({ products, title }) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {products.map((product, index) => {
                if (!("Vendido" in product)) {
                    return (
                        <>
                            <div className="blog-preview" key={index}>
                                <div className="product-preview" >
                                    <Link to={`/products/${index}`} >
                                        <p>{product.["Item Desc"]}</p>
                                        <h3 width="300px">{product.LPN}</h3>
                                        <h3>{product.ASIN}</h3>
                                        {/*<button onClick={() => handleDisplayProducts}>Delete product</button>*/}
                                        <p></p>
                                    </Link>

                                </div>
                            </div>
                        </>
                    )
                } else { return console.log('FFFF') }
            })
            }
        </div>
    );
}

export default ProductsList;
