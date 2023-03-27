import React from 'react'
import { useEffect, useState } from 'react';
// import BoxComentar from '../components/comentarBox/BoxComentar'

function Test3() {

  function over(){
    alert("wala")
  }

return (
  <>
  <div onClick={over}
  className='box'>
      <div id="cube"className='cube'
     
      >
        <div className='face face1'></div>
        <div className='face face2'></div>
        <div className='face face3'></div>
        <div className='face face4'></div>
        <div className='face face5'></div>
        <div className='face face6'></div>
      </div>
  </div>
   
   
   <style jsx>{`
               .box{
                height:12rem;
                width:31rem;
                padding-top:3rem;
               }
              .cube{
                width: 50px;
                height: 50px;
                transform-style: preserve-3d;
                margin: auto;
                animation: turn 7s linear infinite;
                border:solid 1px black;
               }
               @keyframes turn {
                    from {
                    transform: rotate3d(0, 0, 0, 0);
                    }
                    to {
                    transform: rotate3d(4, 4, 1.5, 360deg);
                    }
                  }
              .face{
                width:50px;
                height:50px;
                border:solid black 1px;
                position: absolute;
                opacity: 0.75;  
              }
              .face1{
                background: rgb(86,157,48);
                background: radial-gradient(circle,
                            rgba(86,157,48,1) 17%, 
                            rgba(11,11,11,1) 68%,
                            rgba(0,0,0,1) 100%);
                transform: translateZ(50px);
              }
              .face2{
                background: rgb(148,157,48);
                background: radial-gradient(circle, rgba(148,157,48,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateZ(-50px) rotateY(180deg);
              }
              .face3{
                background: rgb(48,157,130);
                background: radial-gradient(circle, rgba(48,157,130,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateX(-50px) rotateY(-90deg);
              }
              .face4{
                background: rgb(149,29,245);
                background: radial-gradient(circle, rgba(149,29,245,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateX(50px) rotateY(90deg);
              }
              .face5{
                background: rgb(148,157,48);
                background: rgb(221,26,141);
                background: radial-gradient(circle, rgba(221,26,141,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateY(-50px) rotateX(90deg);

              }
              .face6{
                background: rgb(193,34,34);
                background: radial-gradient(circle, rgba(193,34,34,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateY(50px) rotateX(-90deg);

              }

                                
@media (max-width: 600px) {
                 .box{
                    margin: auto;
                    width: 100%;
                    background-color: rgb(221, 221, 221);
                  }
                
}
         `}</style>
   
 </>
  )
}

export default Test3

