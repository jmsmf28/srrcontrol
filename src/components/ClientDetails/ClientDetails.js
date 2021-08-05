import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../useFetch";

const ClientDetails = (props) => {
  console.log(props.data)
  const { id } = useParams();
  const { data: client, error, isLoading } = useFetch(`http://localhost:8000/clients/${id}`);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/clients/' + client.id, {
      method: 'DELETE'
    })
      .then(() => {
        history.push('/');
      })
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {client && (
        <article>
          <h2>{client.name}</h2>
          <p>Orders</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default ClientDetails;