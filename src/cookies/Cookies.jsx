
import { useEffect, useReducer } from "react";
import { useCookies } from "react-cookie";

let initialState = { likesCount: 0 };


function reducer(state, action){
    switch(action.type){
        case 'addLike':
            return { likesCount: state.likesCount + 1 }
        case 'addDislike': 
            return { likesCount: state.likesCount - 1 }
    }
}

export function ReducerDemo1()
{


    const [state, dispatch] = useReducer(reducer, initialState);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    useEffect(()=>{

        console.log(cookies['username']);

    },[])

    function handleLikeClick(){
        dispatch({type:'addLike'});
    }

    function handleSignout(){
        removeCookie('username');
        alert('Signed Out Successfully..');
    }

    return(
        <div className="container-fluid">
            <h2> { cookies['username'] } - SignedIn   <button onClick={handleSignout} className="btn btn-link">Signout</button> </h2>
            <iframe width="400" height="300" src="https://youtube.com/embed/_mhtfJQ5lxU"></iframe>
            <div className="my-2">
               <button onClick={handleLikeClick} className="btn btn-primary bi bi-hand-thumbs-up"> </button>  <span> {state.likesCount} Likes </span>
            </div>
        </div>
    )
}