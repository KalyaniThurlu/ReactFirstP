import { useState } from "react"

export function DataBinding(){
    const [userName,setUserName]=useState("hello")
    function nameChange(event){
setUserName(event.target.value)

    }

    return(
        <div><input type="text" onChange={nameChange}  value={userName} />
        <h4>{userName}</h4></div>
    )
}