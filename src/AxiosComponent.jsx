
import axios from "axios";
import { useEffect, useState } from "react";

export function AxiosData() {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    rating: { rate: '0', ratings: '0', reviews: '0' },
    offers: [],
    image: ''
  });

  function loadData() {
    axios.get("product.json")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="fs-4 fw-bold">{product.title}</div>

        <div className="mt-2 text-success">
          {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
        </div>

        <div>
          <span className="text-secondary">
            {product.rating.rate} rating & {product.rating.reviews} reviews
          </span>
        </div>

        <div className="row">
          <div className="col-md-5">
            <img src={product.image} alt={product.title} style={{ width: '100%' }} />
          </div>
          <div className="col-md-6 bi bi text-success">
            <h4>Available offers:</h4>
            <ul className="fs-3">
              {product.offers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
