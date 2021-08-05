import ClientsList from '../ClientsList/ClientsList';
import useFetch from '../../useFetch'

const Clients = () => {
    const { data: clients, isLoading, error } = useFetch('http://localhost:8000/clients')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {clients && <ClientsList clients={clients} title={'All clients'} />}
        </div>
    );
}

export default Clients;