
import "./form.css";
import { useState } from "react";

export function Login() {
  const [title, setTitle] = useState('User Login');
  const [userName, setUserName] = useState('latha');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <form className="form-login alert alert-warning alert-dismissible">
        <h3 className="bi bi-person-fill">{title}</h3>
        <button type="button" data-bs-dismiss="alert" className="btn-close"></button>
        <dl>
          <dt className="bi bi-person-fill">User Name</dt>
          <dd>
            <input 
              type="text" 
              value={userName} 
              className="form-control" 
            />
          </dd>
          <dt className="bi bi-lock-fill">Password</dt>
          <dd>
            <input 
              type="password" 
              value={password} 
              className="form-control" 
            />
          </dd>
        </dl>
        <button type="submit" className="btn btn-warning w-100">Login</button>
      </form>
    </div>
  );
}
