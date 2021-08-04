import { Link } from "react-router-dom";

const ClientsList = ({ clients, title }) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {clients.map(client => (
                <>
                    <div className="blog-preview" key={client.id} >
                        <Link to={`/clients/${client.id}`}>
                            <h2>{client.name}</h2>
                            <h2>{client.phone}</h2>
                            <h2>{client.email}</h2>
                            <h2>{client.adress}</h2>
                            <p></p>
                        </Link>
                        {/*<button onClick={()=> handleDelete(blog.id)}>Delete blog</button>*/}
                    </div>
                </>
            ))}
        </div>
    );
}

export default ClientsList;
