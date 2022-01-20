import { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({data, title}) => {

  const [isActive, setActive] = useState(false)


  const liked = () => {
    setActive(!isActive);
  }
    console.log(data)

    return (
      <>
          <h1>{title}</h1>  
        <div className="blog-list">
          <div className="blog-preview">
            <p>{data.title}</p>
            <img src={data.url} alt={data.title} />
            <small>{data.date}</small>
            <p>{data.description}</p>
              <div onClick={liked} className={`heart ${isActive ? 'is-active' : null}`}></div>
          </div>
            </div>  
            </> 
     );
}
 
export default BlogList;
