// Below we import "Link" from react-router-dom to handle routes using Router in React
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Spacestagram </h1>
            <div className="links">
                {/* Here we use the word "Link" instead of "<a>" and "to" instead of "href " */}
                <Link to ="/">Home</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;