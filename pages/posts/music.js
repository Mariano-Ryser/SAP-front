import React, { useState, useEffect } from 'react';


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
  return (
    <>
  <section className='section' style={{ fontSize: `${gross}` + "rem"}}>

    <div>
      <button className='button5 ' onClick={() => playSound('mirlo.mp3')}></button>
    </div>
    <div>
      <button className='button6 ' onClick={() => playSound2('mirlo.mp3')}></button>
    </div>
    <div>
      <button className='button5 ' onClick={() => playSound('mirlo.mp3')}></button>
    </div>
    <div>
      <button className='button6 ' onClick={() => playSound2('mirlo.mp3')}></button>
    </div>
    <div>
      <button className='button5 ' onClick={() => playSound('mirlo.mp3')}></button>
    </div>
    <div>
      <button className='button6 ' onClick={() => playSound2('mirlo.mp3')}></button>
    </div>
    <div>
      <button className='button5 ' onClick={() => playSound('mirlo.mp3')}></button>
    </div>
    <div>
      <button className='button6 ' onClick={() => playSound2('mirlo.mp3')}></button>
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


      .button5{
        height: 3rem;
        width: 3rem;
        background-color: rgb(19, 63, 140);
      }.button6{
        height: 3rem;
        width: 3rem;
        background-color: rgb(67, 138, 22);
      }
          a{
  color:yellow;
 } 
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