
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Exfakestore() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  function LoadCategories() {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        response.data.unshift('all');
        setCategories(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }

  function LoadProducts(url) {
    setLoading(true);
    axios.get(url)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleCategoryChange(e) {
    if (e.target.value === "all") {
      LoadProducts('https://fakestoreapi.com/products');
    } else {
      LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }

  function NavbarButtonClick(categoryName) {
    if (categoryName === "all") {
      LoadProducts('https://fakestoreapi.com/products');
    } else {
      LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
  }

  function handleAddClick(product) {
    setCartItems(prevItems => [...prevItems, product]);
    alert(`${product.title}\nAdded to Cart`);
    setCartCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts('https://fakestoreapi.com/products');
  }, []);

  return (
    <div className="container-fluid">
      <header className="d-flex text-white justify-content-between p-2 bg-dark">
        <div>
          <span className="h4">Fakestore.</span>
        </div>
        <div className="fs-5">
          <span className="px-2"><button onClick={() => NavbarButtonClick('all')} className="btn btn-light">Home</button></span>
          <span className="px-2"><button onClick={() => NavbarButtonClick('electronics')} className="btn btn-light">Electronics</button></span>
          <span className="px-2"><button onClick={() => NavbarButtonClick('jewelery')} className="btn btn-light">Jewelery</button></span>
          <span className="px-2"><button onClick={() => NavbarButtonClick("men's clothing")} className="btn btn-light">Men's Fashion</button></span>
          <span className="px-2"><button onClick={() => NavbarButtonClick("women's clothing")} className="btn btn-light">Women's Fashion</button></span>
        </div>
        <div>
          <button data-bs-target="#cart" data-bs-toggle="modal" className="bi bi-cart4 btn btn-warning position-relative me-4">
            <span className="badge rounded position-absolute rounded-circle bg-danger">{cartCount}</span>
          </button>
          <div className="modal fade" id="cart">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="text-primary">Your Cart Items</h2>
                </div>
                <div className="modal-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item =>
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>
                            <img width="50" height="50" src={item.image} alt={item.title} />
                          </td>
                          <td>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-primary" data-bs-dismiss="modal">OK</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-4 row">
        <nav className="col-2">
          <label className="form-label fw-bold">Select Category</label>
          <div>
            <select className="form-select" onChange={handleCategoryChange}>
              {categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)}
            </select>
          </div>
        </nav>
        <main className="col-10 d-flex flex-wrap overflow-auto" style={{ height: '500px' }}>
          {loading ? (
            <div className="w-100 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            products.map(product =>
              <div key={product.id} className="card p-2 m-2" style={{ width: '200px' }}>
                <img src={product.image} className="card-img-top" alt={product.title} height="120px" />
                <div className="card-header" style={{ height: '130px' }}>
                  <div>{product.title}</div>
                </div>
                <div className="card-body">
                  <dl>
                    <dt>Price</dt>
                    <dd>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</dd>
                    <dt>Rating</dt>
                    <dd>
                      <span className="badge bg-success p-1 rounded">{product.rating.rate} <span className="bi bi-star-fill"></span></span>
                      <span className="text-secondary fw-bold">{product.rating.count} ratings</span>
                    </dd>
                  </dl>
                </div>
                <div className="card-footer">
                  <button onClick={() => handleAddClick(product)} className="btn btn-warning bi bi-cart4 w-100">Add to Cart</button>
                </div>
              </div>
            )
          )}
        </main>
      </section>
    </div>
  );
}
