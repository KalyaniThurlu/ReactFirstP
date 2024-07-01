

import axios from "axios";
import { useState, useEffect } from "react";


import React from "react";

export function XmlhttpRequests() {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        rating: { rate: 0, ratings: 0, review: 0 },
        offers: [],
        image: ""
    });

  
    function LoadData(){
        axios.get("product.json")
        .then((response)=>{
           
            setProduct(response.data)

        })
     
        
        .catch((error)=>{
            console.log("this is error")

        })
    }
    useEffect(() => {
        LoadData();
    }, []);

   
    
    
    return (
        <div className="container">
           
           <div className="row mt-4">
            <div className=" col md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{product.title}</h1>
                    <p>Price: ${product.price}</p>
                    <div>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Ratings: {product.rating.ratings}</p>
                      
                      
                    </div>
                    <div>
                        Offers: {product.offers.map((offer, index) => (
                            <li key={index}>{offer}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

