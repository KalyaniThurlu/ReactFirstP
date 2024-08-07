
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function FakestoreLucky(){
    const [products, setProducts] = useState([{id:0, title:'', category:'', price:0, description:'', rating:{rate:0, count:0}, image:''}]);

    let [searchParams] = useSearchParams();

    useEffect(()=>{
        console.log(searchParams)
        axios.get(`https://fakestoreapi.com/products/category/${searchParams.get('search')}`)
        .then(response=>{
            setProducts(response.data);
        })
        },[])

    return(
        <div>
            <h3>Top Search Results </h3>
            <div className="d-flex">
                {
                    products.filter(item=> item.rating.rate>4.5).map(product=>
                        <div key={product.id} className="card p-2 m-2">
                            <img src={product.image} width="100" height="100" />
                            <div className="card-body">{product.rating.rate}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}