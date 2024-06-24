import { useEffect, useState } from "react"

export function DataBinding(){
    const [name,setName]=useState("")
 
    useEffect(()=>{
        setName("suma")

    },[])
    return (
        <div>
<h1>wellcome</h1>

name:{name}
        </div>
    )
}