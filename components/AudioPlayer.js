import React, { useState, useRef, useEffect} from 'react';
import {BsArrowLeftShort} from "react-icons/bs"
import {BsArrowRightShort} from "react-icons/bs"
import {BsFillPlayCircleFill} from "react-icons/bs"
import {BsPauseCircleFill} from "react-icons/bs"



const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
   const [currentTime, setCurrentTime] = useState(0)
   
    //References
    const audioPlayer = useRef(); //reference our audio component
    const progressBar = useRef();
    const animationRef = useRef(); //reference the animation



    useEffect(
        ()=>{
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
            progressBar.current.max = seconds;
        },[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    
    return `${returnedMinutes} : ${returnedSeconds}` 

}   

    const togglePlayPause =() => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if(!prevValue){
            audioPlayer.current.play();
         
        }else{
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }
    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = RequestAnimationFrame(whilePlaying)
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value; 
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        setCurrentTime(progressBar.current.value);
    }

  return (
    <>
  <section className='section'>
    <h1>Audio Player</h1>
    <h1>tan solo - ciro </h1>
    <h1>me gustas mucho - esto es FA!</h1>
    <audio ref={audioPlayer} src='/sounds/mirlo.mp3'></audio>
    <button> <BsArrowLeftShort /> 30</button>
    
    <button
    onClick={togglePlayPause}
    > 
        {isPlaying ? <BsPauseCircleFill/> : <BsFillPlayCircleFill/>}

    </button>

    <button>  30 <BsArrowRightShort /></button>

    {/* current time */}
    <div>{calculateTime (currentTime)}</div>

    {/* progress bar */}
    <div>
        <input
        type='range'
        defaultValue="0"
        ref={progressBar}
        onChange={changeRange}
        ></input>
    </div>

    {/* duration */}
    <div>{ (duration && !isNaN(duration)) && calculateTime(duration)}</div>
   
  </section>


          <style jsx>{`


h1,h2,h3{
  color:white;
}

section{
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size:1.3rem;
      line-height: 1.74;
        color: rgb(191, 191, 191);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:0rem;
    }
                

    @media (max-width: 600px) {
              
                  section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 1rem;
                  padding:0rem;
                      }   

         
      }   
        `}</style>

  </>
  )
}

export {AudioPlayer}