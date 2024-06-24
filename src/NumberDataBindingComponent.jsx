import { useState } from "react";

export function CurrencyData(){
    const [price,setPrice]=useState(4560000.45)
  
    const formattedUSD = price.toLocaleString("en-US", { style: "currency", currency: "USD" });
const formattedINd = price.toLocaleString("en-IN", { style: "currency", currency: "INR" });
const formattedJPY = price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

 
    
    

return(
<div><h1>hello</h1>
curreny:{formattedUSD}
<div>{formattedINd}</div>

<div>{formattedJPY}</div>
</div>


)
}
