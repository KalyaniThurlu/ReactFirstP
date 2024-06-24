
import "./form.css";
import React from "react";

export default function UserLog() {
    return (
        <div className="content">
            <form action="" className="form-log">
                <dl>
                    <h1>login Form</h1>
                    <dt className="bi bi-person fill">Username</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt className="bi bi-lock fill">Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-warning">Login</button>
            </form>
        </div>
    );
}
