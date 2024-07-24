import { useMemo, useState } from "react"

export function  SimpleEx(){
    const [number,setNumber]=useState(0)
    const Dblnumber=useMemo(()=>{
        return number *4

    },[number])

    return(
        <div className="container-fluid">

<p>number:{number}</p>
<p>dblnumbr:{Dblnumber}</p>
<button onClick={()=>setNumber(number+1)}>Increment</button>
<button onClick={()=>setNumber(number-1)}>Decrement</button>
        </div>
    )

}