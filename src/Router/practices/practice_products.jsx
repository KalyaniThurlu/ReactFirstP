
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function Exxproducts(){

    const [products, setProducts] = useState([{id:0, title:'', category:'', price:0, description:'', rating:{rate:0, count:0}, image:''}]);

    let params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })

    },[])

    return(
       <div>
           <h2> {params.category.toUpperCase()} PRODUCTS </h2>
           <div className="d-flex justify-content-between">
              {
                products.map(product=> 

                    <div key={product.id}>
                        <img src={product.image} width="100" height="100" />
                        <div className="btn btn-light">$ {product.price} <Link to={`/details/${product.id}`} className="btn btn-warning"> <span className="bi bi-eye"></span> </Link> </div>
                    </div>

                )
              }
           </div>
           <div>
              <Link to="/categories">Back to Categories</Link>
           </div>
       </div>
    )
}