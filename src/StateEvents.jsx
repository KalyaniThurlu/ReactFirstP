

import { useState } from "react"

export function StateEventDemo()
{
     const [msg, setMsg] = useState('');
     const [code, setCode] = useState('');

     function handleFocus(){
        setMsg('IFSC CODE : SBIN0000HY, HDF0000TN');
     }
     function handleBlur(){
        setMsg('');
     }

     function handleKeyUp(e){
        setCode(e.target.value.toUpperCase());
     }

     return(
        <div className="container-fluid">
            <h2>State Events</h2>
            <dl>
                <dt>Bank IFSC Code</dt>
                <dd><input type="text" onChange={handleKeyUp} value={code}  onBlur={handleBlur} onFocus={handleFocus} /></dd>
                <dd className="text-danger">{msg}</dd>
            </dl>
        </div>
     )
}