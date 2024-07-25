
import { useReducer } from "react";

let initialState = { likesCount: 0 };


function reducer(state, action){
    switch(action.type){
        case 'addLike':
            return { likesCount: state.likesCount + 1 }
        case 'addDislike': 
            return { likesCount: state.likesCount - 1 }
    }
}

export function ReducerDemo()
{
   
    //reducer: This is a function that tells React how to update the state. It's like a set of instructions.
//initialState: This is the starting state. In our case, it's { likesCount: 0 }.
//state: This is the current state. It starts as initialState and changes when we tell it to.
//dispatch: This is a function we use to tell React to run the reducer function with a 
    const [state, dispatch] = useReducer(reducer, initialState);


    function handleLikeClick(){
        dispatch({type:'addLike'});
    }

    return(
        <div className="container-fluid">
            <iframe width="400" height="300" src="https://youtube.com/embed/_mhtfJQ5lxU"></iframe>
            <div className="my-2">
               <button onClick={handleLikeClick} className="btn btn-primary bi bi-hand-thumbs-up"> </button>  <span> {state.likesCount} Likes </span>
            </div>
        </div>
    )
}