
import React, { useState } from "react";

export function HandlerUserName() {
    const [userName, setUserName] = useState('latha');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
       
        
    };

    return (
        <div>
            <form action="">
                <dl>
                    <dt>Username</dt>
                    <dd>
                        <input type="text" onChange={handleUserNameChange} value={userName} />
                    </dd>
                </dl>
                <h1>Hello, {userName}</h1>
            </form>
        </div>
    );
}
