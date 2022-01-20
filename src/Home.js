import BlogList from './BlogList'
import useFetch from "./useFetch";

const Home = () => {

    const apiKey = '5gfCoWOBOc7bDK68AoSm1g80uGTheVyqK0t96bv6'
const {data, isLoading, error} = useFetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey)

    
    return ( 
        <div className="home"> 
            {/* if error is true, show error*/} 
            {error && <div> { error } </div>}
            {/* If isLoading is true, show loading...  */}
            {isLoading && <div>Loading...</div>}
            {/* If there are blogs, show blogList and pass props */}
            {data && <BlogList data={data} title="All Space pics" /> }
             {/* <BlogList blogs={blogs.filter((blog) =>  blog.author === 'mario')} */}
                    
             {/* title="Mario's blogs"/> */}
         </div>

     );
}
 
export default Home;