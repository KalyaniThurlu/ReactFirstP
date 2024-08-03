import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function Exrouter(){
    return(
        <div>

            <BrowserRouter>
            <header className="d-flex justify-content-around p-3 bg-info">

                <div className="profile-pick" style={{height:"150px"}} >
                    <img className="profile-pick" src="flag.jpg" alt=""width="100" height="100" />
                </div>
                <div className="h2"><span>React Developer</span></div>
                <div className="d-flex-justify-content-between" >
                  
                  
                   <span className="mx-2"><Link className="btn btn-warning" to="About-me">About Me </Link></span>
                    <span className="mx-2">
                        <Link className="btn btn-success" to="My-Projects">My_Projects</Link>
                    </span>
                    <span className="mx-2"><Link className="btn btn-secondary" to="My-Resume">My Rasume</Link></span>
                    <span className="mx-2">
                        <Link className="btn btn-dark" to="contact">contact </Link>
                    </span>
                </div>
            </header>
            <section className="text-white bg-dark" style={{height:"100vh "}}>
<Routes>

    <Route path="/" element={<div><h1>Aboutpage</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, accusamus.</p></div>}/>
    <Route path="About-me" element={<div><h1>About me</h1> <p> <i>orem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aut soluta dolorum rerum recusandae accusamus ipsum quos? Fugiat, reiciendis assumenda.</i>L
    </p></div>}/>
    <Route path="My-Projects" element={<div><h2>My Projects</h2> <ul><li>To-Do-App</li></ul><ul><li>Video Galary</li></ul></div>}/>
    <Route path="My-Resume" element={<div> <h2>My Resume</h2> <a className="text-white" href="downloda resume"></a></div>}/>
    <Route path="contact" element={<div><h3>Contact</h3></div>}/>

</Routes>

            </section>
            
            </BrowserRouter>
        </div>
    )
}