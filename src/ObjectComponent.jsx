
import { useEffect, useState } from "react";

export function Dataobj() {
    const [product] = useState({
        name: "seetha",
        price: 200,
        cities: ["mumbai", "hyd"],
        rating: { rate: 4.6 }
    });

    useEffect(()=>{} ,[]);

    return (
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.name}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Cities</dt>
                <dd>
                    <ul>
                        {product.cities.map((city, index) => (
                            <li key={index}>{city}</li>
                        ))}
                    </ul>
                </dd>j
                <dt>Rating</dt>
                <dd>{product.rating.rate}</dd>
            </dl>
        </div>
    );
}
