import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound'
// eslint-disable-next-line no-lone-blocks
{/* curly braces allow react to use dynamic values */}

function App() {


  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              
              <Route exact path="/">
                <Home />
              </Route>
             
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
     </Router>






      //  {/* *****    NOTES  ****** */}
      // {/* <h1>{title}</h1>
      //   <p>liked {likes} times</p>
      // {/* {<p> {person} </p>} */}
      // {/*    THE ONLY different data types allowed in react       */}
      // {/* <p>{10}</p> */}
      // {/* <p>{"Hello guys"}</p>  */}
      // {/* <p>{[1,2,3,4]}</p> */}
      // {/* <p>{Math.random() * 10}</p> */}
      // {/* <a href={googleLink}>google link</a>  */} 
  );
}

export default App;
