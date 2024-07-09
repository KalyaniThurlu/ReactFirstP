import { useState } from "react"

export function ExTouch(){
    const [msg,setMsg]=useState()
    const [styleobg,setStyleobg]=useState({position:"",left:"",top:""})

    function MoveAd(message,e){
        console.log(e)
        setMsg(message)

    }
    function handlerChage(e){
        setStyleobg({
            position:"fixed",
            left:e.touches[0].clientX+"px",
            top:e.touches[0].clientY+"px"
        })
    }
    return (
        <div className="container-fluid">
            <h1>mobile</h1>
            <aside onTouchMove={(e)=> MoveAd(e)}
                >
                    <img src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" alt=""width="200" height="300" className="border border-1 border-primary"
                />
                </aside>
                <img onTouchStart={
                    handlerChage
                } src="https://jamesandco.in/cdn/shop/files/123_3f1efcf8-0b5e-410b-9d8e-bf065c6f631c.jpg?v=1695789686"
                
                 alt="" width="200" height="300"/>
                <h1>{msg}</h1>

                
        </div>
    )
}