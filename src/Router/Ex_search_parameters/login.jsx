
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function CustomerLogin() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);

    let navigate = useNavigate();

    function handleIdChange(e) {
        setUserId(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleLoginClick() {
        // Simple validation for demonstration
        if (userId === "john_nit" && password) {
            setCookie("userid", userId);
            navigate("/categories");
        } else {
            navigate("/error");
        }
    }

    return (
        <div>
            <h3>Customer Login</h3>
            <dl>
                <dt>User Id</dt>
                <dd>
                    <input
                        type="text"
                        value={userId}
                        onChange={handleIdChange}
                    />
                </dd>
                <dt>Password</dt>
                <dd>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </dd>
            </dl>
            <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
        </div>
    );
}
