

import { useRef, useState } from "react"

export function Intervaldemo()
{
     const [toggleProgress, setToggleProgress] = useState('d-none');
     const [toggleImage, setToggleImage] = useState('d-none');
     const [toggleBtn, setToggleBtn] = useState('d-block');
     const [progressValue, setProgressValue] = useState(1);

     let count = useRef(1);
     let suspendThread = useRef(null);

     function StartProgress(){
          count.current = count.current + 1;
          setProgressValue(count.current);
          if(count.current==100)
          {
             setToggleProgress('d-none');
             setToggleImage('d-block');
          }
     }

     function handleLoadClick(){
         setToggleBtn('d-none');
         setToggleProgress('d-block');
         suspendThread.current =  setInterval(StartProgress,100);
     }

     function handlePauseClick(){
         clearInterval(suspendThread.current);
     }
     function handlePlayClick(){
        suspendThread.current = setInterval(StartProgress,100);
     }

     return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <div>
                     <div className={toggleBtn}>
                         <button onClick={handleLoadClick} className="btn btn-primary">Load Image</button>
                     </div>
                     <div className={toggleProgress}>
                        <progress value={progressValue} min="1" max="100" style={{width:'350px', height:'30px'}}></progress>
                        <p className="text-center">
                            <button onClick={handlePlayClick} className="btn btn-success bi bi-play"></button>
                            <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause ms-1"></button>
                        </p>
                        <p className="text-center">{progressValue}% completed</p>
                     </div>
                     <div className={toggleImage}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrvRWDpRts3ffsdJKXCCqzfSaLNGc2Bxc5g&s" width="300" height="300" />
                     </div>
                </div>
            </div>
        </div>
     )
}


