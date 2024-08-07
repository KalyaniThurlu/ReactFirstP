
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./home";

import { Categories } from "./categories";

import { Products } from "./products";

import { Details } from "./detailes";
import { FakestoreLucky } from "./luckky";





import { Search } from "./search";
import { Results } from "./results";
import { CustomerLogin } from "./login";





export function FakestoreIndex1(){
     return(
        <div>
            <BrowserRouter>
                  <header className="d-flex justify-content-between p-4 bg-dark text-white">
                      <div>
                        <span className="fs-4 fw-bold">Fakestore.</span>
                      </div>
                      <div className="fs-5">
                         <Link to="/home" className="link link-light"><span className="mx-2">Home</span></Link>
                         <Link to="/categories" className="link-light"><span className="mx-2">Categories</span></Link>
                         <span className="mx-2">Blog</span>
                         <span className="mx-2">Pages</span>
                      </div>
                      <div className="fs-5">
                        <Link to="/search" className="link-light"><span className="bi bi-search mx-2"></span></Link>
                        <Link to="/CustomerLogin" className="link-light"><span className="bi bi-person mx-2"></span></Link>
                        <span className="bi bi-cart3 mx-2"></span>
                      </div>
                  </header>
                  <section className="mt-4 p-4">
                     <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="home" element={<Home />} />
                         <Route path="categories" element={<Categories />} />
                         <Route path="products/:category" element={<Products/>}>
                         <Route parh ="CustomerLogin" element={<CustomerLogin/>}/>
                             <Route path="details/:id" element={<Details />} />
                         </Route>
                         
                         
                         <Route path="search" element={<Search />} />
                         <Route path="results" element={<Results />} />
                         <Route path="lucky" element={<FakestoreLucky />} />
                         { <Route path="*" element={<h2 className="text-danger">Not Found</h2>} /> }
                     </Routes>
                  </section>            </BrowserRouter>
        </div>
     )
}