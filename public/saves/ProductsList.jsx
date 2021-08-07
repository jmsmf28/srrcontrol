import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import styles from './../products.css'

const ProductsList = ({ products, title }) => {

    return (
        <>
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

            <div className={styles.grid}>
                <Link to={`/products/${index}`} className={styles.card}>
                    <h2>Documentation &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </Link>

                <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2>Learn &rarr;</h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                    href="https://github.com/vercel/next.js/tree/master/examples"
                    className={styles.card}
                >
                    <h2>Examples &rarr;</h2>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className={styles.card}
                >
                    <h2>Deploy &rarr;</h2>
                    <p>
                        Instantly deploy your Next.js site to a public URL with Vercel.
                    </p>
                </a>
            </div>
        </>




    );
}

export default ProductsList;