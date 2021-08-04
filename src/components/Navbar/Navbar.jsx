import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState('');
    console.log(search)

    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/clients">Clients</Link>
                <Link to="/products">Products</Link>
                <Link to="/sales">Sales</Link>
                <Link to="/create" /* style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }} */>New Blog</Link>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>
        </nav>
    );
}

export default Navbar;