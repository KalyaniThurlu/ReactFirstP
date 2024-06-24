import { useEffect, useState } from "react";

export function  Data(){
    const [name,setName]=useState("")
    useEffect(()=>{
        setName("seetha")
    },[])
    return(
        <div><h1>hello</h1>
        value:{name}</div>
    )
    
}
