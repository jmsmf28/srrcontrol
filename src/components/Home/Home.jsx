import BlogList from '../BlogList/BlogList';
// import styled from 'styled-components';
import useFetch from '../../useFetch'

/* const Margin = styled.div`
    margin:40px;
    padding: 10px;
` */

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    /*     const handleDelete = (id) => {
            const newBlogs = blogs.filter((blog) => blog.id !== id)
            setBlogs(newBlogs);
        }  */

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All blogs'} />}
            {/*<Margin />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title={'Marios`s blogs'}/>*/}
        </div>
    );
}

export default Home;