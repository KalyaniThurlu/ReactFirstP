
import { useEffect, useState } from "react"
export function BooleanData(){

    const [stock,setStock]=useState("false")
    useEffect(()=>{
        setStock("true")
    },[])
    return(
        <div>
           stock: {stock?"true":"false"}
        </div>
    )
}