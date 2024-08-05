import { BrowserRouter,Routes,Route, Router } from "react-router-dom"

import { Exxhome } from "./practice_home"
import { Exxcategory } from "./practice_category"
import { Exxdetailes } from "./practice_detailes"
import { Exxproducts } from "./practice_products"
import { Exxlogin } from "./practice_login"
import { Exxerror } from "./practice_error"



export function Exxindex(){
    return(
        <div>
            
            <BrowserRouter>
            
            
          
            <header className="d-flex justify-content-between p-4 bg-dark text-white">

<div className="fs-bold"> 
    <h2>FakestoreApi</h2></div>
<div className="fs-5">
    <span className="mx-2">Home</span>
    <span className="mx-2">category</span>
    <span className="mx-2">blag</span>
    <span className="mx-2" >page</span>
</div>
<div className="fs-5 d-flex-justify-content-around">
    <span className="bi bi-search mx-3"></span>
<span className="bi bi-person mx-3"></span>

<span className="bi bi-cart3 mx-3"></span>
</div>

            </header>
            <section>
            <Routes>

            <Route path="/" element={<Exxhome/>}/>
            <Route path="/Exxhome" element={<Exxhome/>}/>
            <Route path="Exxcategory" element={<Exxcategory/>}/>
            <Route path="Exxdetailes" element={<Exxdetailes/>}/>
            <Route path="Exxproducts" element={<Exxproducts/>}/>
            <Route path="Exxlogin" element={<Exxlogin/>}/>
            <Route path="Exxerror" element={<Exxerror/>}/>
          
          
            </Routes>
            </section>
            </BrowserRouter>
        </div>
    )
}