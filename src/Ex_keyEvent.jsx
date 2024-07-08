

import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){
    const [codeError, setCodeError] = useState('d-none');

    const [users, setUsers] = useState([{UserId:''}]);
    const [userError, setUserError] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pwdStrength, setPwdStrength] = useState({width:''});
    const [bgClass, setBgClass] = useState('');



    useEffect(()=>{
         axios.get('KeysEvents.json')
         .then(response=>{
              setUsers(response.data);
         })
    },[])

    function VerifyUserId(e){
        var userid = e.target.value;
        for(var user of users)
        {
            if(user.UserId===userid){
                setUserError('UserId Taken - Try Another');
                setErrorClass('text-danger');
                break;
            } else {
                setUserError('UserId Available');
                setErrorClass('text-success');
            }
        }
    }

    function VerifyPassword(e)
    {
            if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/))
            {
                 setPwdError('Strong Password');
                 setErrorClass('text-success');
                 setPwdStrength({width:'100%'});
                 setBgClass('bg-success');

            } else {
                if(e.target.value.length<4){
                    setPwdError('Poor Password');
                    setErrorClass('text-danger');
                    setPwdStrength({width:'30%'});
                    setBgClass('bg-danger');
                } else {
                    setPwdError('Weak Password');
                    setErrorClass('text-warning');
                    setPwdStrength({width:'60%'});
                    setBgClass('bg-warning');
                }
            }
    }

 
    function verifycode(e) {
        if (e.which >= 65 && e.which <= 90) {
            setCodeError("d-block");  // Show the element if an uppercase letter is pressed
        } else {
            setCodeError("d-none");   // Hide the element for any other key press
        }
    }
    

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl className="w-25">
                <dt>User Id</dt>
                <dd><input type="text" className="form-control" onKeyUp={VerifyUserId} /></dd>
                <dd className={errorClass}>{userError}</dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onKeyUp={VerifyPassword}/></dd>
                <dd>
                    <div className="progress">
                        <div style={pwdStrength} className={`progress-bar progress-bar-animated progress-bar-striped ${bgClass}`}>
                     
                     
                        </div>
                    </div>
                </dd>
                <dd className={errorClass}>{pwdError}</dd>
                <div className="progress">
                    <dl style={pwdStrength} className={`progress-bor progress-bor-animated progress-bor-striped ${pwdError}`}></dl>
                
                </div>
                <dt>Verify Code</dt>
                <dd><input type="text" onKeyPress={ verifycode  } className="form-control" placeholder="Lowercase Code Only" /></dd>
                <dd className={codeError}>
                    <div className="text-warning">
                    <span className="bi bi-exclamation-triangle-fill"></span> Warning  Caps ON
                    </div>
                </dd>
            </dl>
        </div>
    )
}

