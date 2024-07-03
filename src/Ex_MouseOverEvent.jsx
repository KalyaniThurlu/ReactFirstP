

import axios from "axios";
import { useEffect, useState } from "react";




export function ExMouserOver(){

    const [images, setImages] = useState([{img_src:''}]);
    const [previewSource, setPreviewSource] = useState('https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$')
        

    function LoadImages(){
        axios.get('mobiles.json')
        .then(response=> {
            setImages(response.data);
        })
    }

    useEffect(()=>{

        LoadImages();

    },[])

    function GeneratePreview(e){
        setPreviewSource(e.target.src);
    }

    return(
        <div className="container-fluid">
            <div className="mt-4 row">
                <div className="col-2">
                    {
                        images.map(image=>
                            <img onMouseOver={GeneratePreview} key={image.img_src}
                             className="d-block my-3" width="50%" src={image.img_src} />
                        )
                    }
                </div>
                <div className="col-10">
                    <img  width="350" src={previewSource} className="mt-4" height="450"/>
                </div>
            </div>
        </div>
    )
}