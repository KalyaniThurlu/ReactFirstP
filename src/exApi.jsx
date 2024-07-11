
import axios from "axios";
import { useEffect, useState } from "react";

export function Ex() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  function LoadImages() {
    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      response.data.unshift("All");
      setCategories(response.data);
    });
  }

  function LoadProducts(url) {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }

  function HandlerChangeCategory(e) {
    if (e.target.value === "All") {
      LoadProducts("https://fakestoreapi.com/products");
    } else {
      LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }

  useEffect(() => {
    LoadImages();
    LoadProducts("https://fakestoreapi.com/products");
  }, []);

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between text-white p-4 bg-dark">
        <div>
          <span className="h4">fakestore:</span>
        </div>

        <div className="fs-5">
          <span className="px-2">Home</span>
          <span className="px-2">Electronics</span>
          <span className="px-2">Women's clothing</span>
          <span className="px-2">Men's clothing</span>
        </div>
        <div>
          <button className="bi bi-cart4 btn btn-warning position-relative">
            <span className="badge rounded position-absolute rounded-circle bg-danger">0</span>
          </button>
        </div>
      </header>

      <select
        className="form-select mt-3"
        onChange={HandlerChangeCategory}
        id="categorySelect"
        style={{ width: "200px" }}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <main className="col-10 d-flex flex-wrap overflow-auto" style={{ height: "500px" }}>
        {products.map((product) => (
          <div key={product.id} className="card p-2 m-3" style={{ width: "200px" }}>
            <img src={product.image} className="card-img-top" style={{ height: "120px" }} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <p className="card-text">Rating: {product.rating.rate}</p>
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
