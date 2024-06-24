import { useState } from "react"

export function UseLogid(){
const [title,setTitle]=useState("userlog")

const [username,setUserName]=useState("")
const [password,setPassword]=useState("")

    return(
        <div className="content">
           
           <form className="form-login alert alert-warning alert-dismissible">
            <h1>{title}</h1>
       
       
        <button type="button data-bs-dismiss=alert"className="btn-close" ></button>
        
         <dl>
<dt>username</dt>
<dd><input type="text"  value={username}/></dd>
<dt>password</dt>
<dd><input type="password" value={password} /></dd>

         </dl>
         <button type="button" className="btn btn-primary w-100"></button>
                </form>
        </div>
    )
}