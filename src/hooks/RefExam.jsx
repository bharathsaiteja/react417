import React,{useEffect,useRef,useState} from 'react'
import VIDEO from "./video1.mp4";
const RefExam = () => {
    const[play,setPlay]=useState(true);
    const eleRef = useRef();
    let videoRef = useRef();
    console.log(videoRef);
    useEffect(()=>{
        eleRef.current.style.color="crimson";
        eleRef.current.innerText="React Ref"
    })
    let playorpause=()=>{
        if(play==true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>
        <h1 ref={eleRef}>refexample</h1>
        <video src={VIDEO} ref={videoRef} onClick={playorpause}></video>
    </div>
  )
}

export default RefExam