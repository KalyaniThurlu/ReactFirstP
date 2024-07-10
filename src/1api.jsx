import { useEffect, useState } from "react"

export function All(){
  const [data,setData]=useState("")
  const [error,setError]=useState("")
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response)=>{

      if(!response.ok){
        throw new error("network not available")
        
      }
      return response.json()
   
      
    })
    .then(()=>{
      setData(data)
    })
    .catch(()=>{
      setError(error.message)
    })

  },[])
  return(
    <div className="container-fluid">
      <h1>All catageries</h1>
      <div className="row">
     
      {data.map((product) => (
        <div key={product.id} className="col-md-2 mb-3">
            <div className="card">

<img src={product.image}  classNamealt="card-img-top" alt={product.title} />
<h5 className="card-title">{product.title}</h5>
<p className="card-price">{product.price}</p>
</div>
          </div>

        )}}
         {error&&<div> error:{error};
      </div>}
    </div>
    </div>


  )
}