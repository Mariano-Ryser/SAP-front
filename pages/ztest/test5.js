import React from 'react'
// import { useEffect, useState } from 'react';

function Test5() {


return (
  <>
  <div className='box'>
      <div className='cube'>
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
                height:100%;
                width:100%;
               }
              .cube{
                width: 50px;
                height: 50px;
                transform-style: preserve-3d;
                margin: auto;
                animation: turn5 5s linear infinite;
                border:solid 1px black;
               }
               @keyframes turn5 {
                    0% {
                    transform: rotate3d(0, 0, 0, 0);
                    }
                   
                    100% {
                    transform: rotate3d(2, 2, 1.2, 360deg);
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
                background: rgb(7, 5, 151);
                background: radial-gradient(circle,
                            rgba(86,157,48,1) 17%, 
                            rgba(11,11,11,1) 68%,
                            rgba(0,0,0,1) 100%);
                transform: translateZ(25px);
              }
          
              .face2{
                background: rgb(148,157,48);
                background: radial-gradient(circle, rgba(148,157,48,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateZ(-25px) rotateY(180deg);
              }
              .face3{
                background: rgb(48,157,130);
                background: radial-gradient(circle, rgba(48,157,130,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateX(-25px) rotateY(-90deg);
              }
              .face4{
                background: rgb(149,29,245);
                background: radial-gradient(circle, rgba(149,29,245,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateX(25px) rotateY(90deg);
                animation: face4 5s infinite alternate;
              }
              @keyframes face4 {
                    0% {
                      transform: translateX(25px) rotateY(90deg);
                    }
                   
                    100% {
                      transform: translateX(45px) rotateY(1090deg);
                    }
                  }
              .face5{
                background: rgb(148,157,48);
                background: rgb(221,26,141);
                background: radial-gradient(circle, rgba(221,26,141,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateY(-25px) rotateX(90deg);
                animation: face5 10s infinite alternate;
              }
              @keyframes face5 {
                    0% {
                      transform: translateY(-10px) rotateX(90deg);
                    }
                   
                    100% {
                      transform: translateY(-50px) rotateX(190deg);
                    }
                  }

              .face6{
                background: rgb(193,34,34);
                background: radial-gradient(circle, rgba(193,34,34,1) 17%, rgba(11,11,11,1) 68%, rgba(0,0,0,1) 100%);
                transform: translateY(10px) rotateX(-90deg);
                animation: face6 7s infinite alternate;
              }

              @keyframes face6 {
                    0% {
                      transform: translateY(10px) rotateX(-90deg);
                    }
                   
                    100% {
                      transform: translateY(65px) rotateX(-190deg);
                    }
                  }
                                
@media (max-width: 600px) {
                 .box{
                  }
                
}
         `}</style>
   
 </>
  )
}

export default Test5

