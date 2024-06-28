
import { useEffect, useState } from "react";
import $ from "jquery";

export function JqueryAjaxComponent() {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        rating: { rate: 0, ratings: 0, reviews: 0 },
        offers: [],
        image: ''
    });

    function loadData() {
        $.ajax({
            url: "product.json",
            method: "GET",
            dataType: "json",
            success: function(data) {
                setProduct(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
               
             
                console.error("fail the data")
            }
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" alt={product.title} />
                </div>
                <div className="col-9">
                    <div className="fs-4 fw-bold">{product.title}</div>
                    <div className="mt-2">
                        <span className="bg-success rounded text-white p-1">
                            <span>{product.rating.rate}</span> <span className="bi bi-star-fill"></span>
                        </span>
                        <span className="ms-3 fw-bold text-secondary">
                            {product.rating.ratings} ratings & {product.rating.reviews} reviews
                        </span>
                    </div>
                    <div className="mt-3">
                        <span className="fw-bold fs-3">
                            {product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })}
                        </span>
                    </div>
                    <div className="mt-3">
                        <h5>Available Offers</h5>
                        <ul className="list-unstyled">
                            {product.offers.map((offer, index) => (
                                <li className="bi bi-tag-fill text-success my-2" key={index}>
                                    <span className="text-secondary">{offer}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
