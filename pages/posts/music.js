import React, { useState, useRef } from 'react';

const Music = () => {
  const initialState = (1.3)
  const [gross, setGross] = useState(initialState)

  const grosse = ()=> {
      setGross(gross + 0.05)
  }

  const grosseOut = ()=>{
    setGross(gross - 0.05)
  }

  const playSound = (soundFileName) => {
    const audio = new Audio(`/sounds/${soundFileName}`);
    audio.play();
  };
  const playSound2 = (soundFileName) => {
    const audio = new Audio(`/sounds/${soundFileName}`);
    audio.play();
  };
  // REPRODUCIR Y PAUSAR 



  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };
  

 const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    setCurrentTime(audioElement.currentTime);
  };

  const handleLoadedData = () => {
    const audioElement = audioRef.current;
    setDuration(audioElement.duration);
  };

 
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return (
    <>
  <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
    <div>
      <h1>Music</h1>
    </div>
<h1>pajaros</h1>
    <div>
      <button className='button5 ' onClick={() => playSound('mirlo.mp3')}>Mirlo</button>
    </div>
    <div>
      <button className='button6 ' onClick={() => playSound2('Cuervo.mp3')}>Cuervo</button>
    </div>
    <div>
      <h1>insectos</h1>
      <button className='button7 ' onClick={() => playSound2('MOSCA.mp3')}>MOSCA</button>
    </div>
    <div>
      <button className='button8 ' onClick={() => playSound2('mosquito.mp3')}>MOSQUITO</button>
    </div>
    <div>
      <h1>terror ambiental</h1>
      <button className='button9 ' onClick={() => playSound2('sonidosDeTruenos.mp3')}>TRUENOS</button>
    </div>
    <div>
      <button className='button10 ' onClick={() => playSound2('terror.mp3')}>TERROR</button>
    </div>

    <div>
      <button className='button11 ' onClick={() => playSound2('vikings.mp3')}>VIKINGS</button>
    </div>

    <div> 
      <button className='button11 ' onClick={() => playSound2('Ambulancia.mp3')}>Ambulancia</button>
    </div>

    <div> 
      <button className='button11 ' onClick={() => playSound2('originalJuan.mp3')}>Original Juan</button>
    </div>
  

    Test.. reproducir y pausar toggle

    <div>
      <audio 
        ref={audioRef}
       src="/sounds/sonidosDeTruenos.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      >
      </audio>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pausar' : 'Reproducir'}</button>
   
    <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  
   
   
  </section>

  <button
     className='button2'
     onClick={grosse}
     >+</button>
      <button
     className='button3'
     onClick={grosseOut}
     >-</button>
          <style jsx>{`
          h1{font-size: 1rem;
          font-family: monospace;
      }
      button{
        width: 7rem;
        height: 2rem;
        margin: 0.2rem;
        cursor: pointer;
      }
      
      .button5{
        display: inline-block;
        
        
        background-color: rgb(19, 63, 140);
      }.button6{
        
        background-color: rgb(67, 138, 22);
      }
      .button7{
      
        background-color: rgb(19, 140, 29);
      }.button8{
     
        background-color: rgb(114, 207, 56);
      }
      .button9{
       
        background-color: rgb(167, 13, 8);
      }.button10{
      
        background-color: rgb(188, 197, 27);
      }
      .button11{
       
        background-color: rgb(150, 7, 140);
      }.button12{
      
        background-color: rgb(170, 6, 159);
      }rgb(130, 6, 121)
          a{
  color:yellow;
 } 
h1,h2,h3{
  color:white;

}

section{
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color: rgb(60, 144, 125);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:0rem;
    }
                  .button2{    
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3{
                    font-size:2rem;
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }

    @media (max-width: 600px) {
               .button2{
                    border-radius:10px;
                    position: fixed;
                    bottom:5rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                }
                .button3{
                    border-radius:10px;
                    position: fixed;
                    bottom: 2rem;
                    left:1rem;
                    background-color: white;
                    height: 2.4rem;
                    width: 2.5rem;
                    box-shadow: inset 0px 0px 5px 2px rgba(83, 83, 83, 0.443);
                  }

                  section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 1rem;
                  padding:0rem;
                      }   

            .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:20rem;
                    width: 95%;
                    {/* border: solid 1px black; */}
                  }
      }   
        `}</style>

  </>
  )
}

export default Music