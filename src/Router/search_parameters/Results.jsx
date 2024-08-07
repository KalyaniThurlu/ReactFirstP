

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"


export function FakestoreResults(){

    const [products, setProducts] = useState([{id:0, title:'', category:'', price:0, description:'', rating:{rate:0, count:0}, image:''}]);

    let [searchParams] = useSearchParams();

    useEffect(()=>{
            axios.get(`https://fakestoreapi.com/products/category/${searchParams.get('search')}`)
            .then(response=>{
                setProducts(response.data);
            })
    },[])

    return(
        <div>
            <h2>Searching for {searchParams.get('search')}</h2>
            <div className="d-flex">
                {
                    products.map(product=>
                        <div key={product.id} className="card p-2 m-2">
                            <img src={product.image} width="100" height="100" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}