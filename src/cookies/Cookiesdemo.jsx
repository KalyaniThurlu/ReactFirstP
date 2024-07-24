
import { useState,useEffect } from "react";
import { useCookies } from "react-cookie";

export function Login() {
    const [title, setTitle] = useState('User Login');
    const [userName, setUserName] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    function handleNameChange(e) {
        setUserName(e.target.value);
    }

    function handleLoginClick() {
        setCookie('username', userName);
        alert('Cookie Created');
       
        
    }
    function handleLogOut(){
        removeCookie("userName")
        alert("cookie remove successfully")
    }

    useEffect(()=>{

        console.log(cookies['username']);

    },[])

    

    return (
        <div className="container">
            <div>
                <form className="form-login alert alert-warning alert-dismissible">
                    <h3 className="bi bi-person-fill">{title}</h3>
                    <button data-bs-dismiss="alert" className="btn btn-close"></button>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onChange={handleNameChange} className="form-control" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" /></dd>
                        <dt>Verify Code</dt>
                    </dl>
                    <button type="button" onClick={handleLoginClick} className="btn btn-warning w-100">Login</button>
                    <button type="button" onClick={handleLogOut} className="btn btn-success w-100" >Log Out</button>
                </form>
            </div>
        </div>
    );
}
