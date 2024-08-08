
import { useState } from "react";
import { TextField, Button } from "@mui/material";

export function Loginform() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleNameChange(e) {
        setUserName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault(); // Prevent form from refreshing the page
        if (userName === "" || password.length <= 6) {
            alert("Please enter a username and ensure the password is more than 6 characters.");
        } else {
            alert("Login successfully");
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 mx-4">
                    <form>
                        <h1>MUI</h1>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            value={userName}
                            onChange={handleNameChange}
                            margin="normal"
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={handlePasswordChange}
                            margin="normal"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="warning"
                            fullWidth
                            onClick={handleClick}
                        >
                            Login
                        </Button>
                    </form>
                </div>

                <div className="col-4 mx-4">
                    <h1>Bootstrap</h1>
                    <form>
                        <dl>
                            <dt>Username</dt>
                            <dd>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={handleNameChange}
                                    className="form-control"
                                />
                            </dd>
                            <dt>Password</dt>
                            <dd>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="form-control"
                                />
                            </dd>
                            <dd>
                                <button
                                    type="submit"
                                    onClick={handleClick}
                                    className="btn btn-success w-25"
                                >
                                    Login
                                </button>
                            </dd>
                        </dl>
                    </form>
                </div>
            </div>
        </div>
    );
}
