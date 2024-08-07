

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { ExfakestoreHome } from "./home";


import { ExfakestoreCategory } from "./category";


import { ExfakestoreProducts } from "./products";
import { ExfakestoreDetails } from "./Detailes";



import { FakestoreResults } from "./Results";
import { FakestoreSearch } from "./search";


export function TextfakestoreIndex(){
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
                        <Link to="/login" className="link-light"><span className="bi bi-person mx-2"></span></Link>
                        <span className="bi bi-cart3 mx-2"></span>
                      </div>
                  </header>
                  <section className="mt-4 p-4">
                     <Routes>
                         <Route path="/" element={<ExfakestoreHome />} />
                         <Route path="home" element={<ExfakestoreHome />} />
                         <Route path="categories" element={<ExfakestoreCategory />} />
                         <Route path="products/:category" element={<ExfakestoreProducts />}>
                             <Route path="details/:id" element={<ExfakestoreDetails />} />
                         </Route>
                        
                        
                         <Route path="search" element={<FakestoreSearch />} />
                         <Route path="results" element={<FakestoreResults />} />
                    
                    
                     </Routes>
                  </section>
            </BrowserRouter>
        </div>
     )
}