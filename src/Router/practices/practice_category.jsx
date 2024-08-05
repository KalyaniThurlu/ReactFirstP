

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Exxcategory(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
             setCategories(response.data);
        })
    },[])

    return(
       <div>
           <h2>Categories</h2>
           <ul className="list-unstyled">
              {
                categories.map(category=> <li className="my-3" key={category}> <Link className="btn btn-dark w-25" to={`/products/${category}`}> {category.toUpperCase()} </Link> </li> )
              }
           </ul>
           <div>
              <Link to="/home">Back to Home</Link>
           </div>
       </div>
    )
}