import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';

const ProductsList = ({ products, title }) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            <Table responsive>

                {products.map((product, index) => {
                    if (!("Vendido" in product)) {
                        return (
                            <tbody>
                                <tr>
                                    <Link to={`/products/${index}`} >
                                        <td width="400px"><p>{product.["Item Desc"]}</p></td>
                                        <td><h3>{product.LPN}</h3></td>
                                        <td><h3>{product.ASIN}</h3></td>
                                        {/*<button onClick={() => handleDisplayProducts}>Delete product</button>*/}
                                    </Link>
                                </tr>
                            </tbody>
                        )
                    } else { return console.log('FFFF') }
                })
                }
            </Table>
        </div>
    );
}

export default ProductsList;