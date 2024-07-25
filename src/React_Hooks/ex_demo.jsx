import {createContext,useContext,useState} from "react"
let userContext=createContext(null)
export function Exlevel1(){
    let context=useContext(userContext)
 
 return(
    <div className="bg-dark p-4 m-3 text-danger">
        <h1>exlevel1</h1>
        

    </div>
 )
}
export function Exlevel2(){
    let context =useContext(userContext)
    return(
        <div className="bg-success p-2 m-3 text-white">
            <h1>exlevel2{context}</h1>

        </div>
    )

}
export function Demos(){
    const [userName,setUserName]=useState()
    function handleChage(e){
        setUserName(e.target.value)
    }

    return(
        <div className="bg-dark p-3 m-2">
            <input type=" text" placeholder="username" onChange={handleChage} />
            <div className="my-3">
              
              <userContext.Provider value={userName}>
                <h2> hello {userName}</h2>
                <Exlevel2/>
                </userContext.Provider>
            </div>

        </div>
    )
}