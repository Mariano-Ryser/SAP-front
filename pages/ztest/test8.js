import React from 'react'
import { useEffect, useState } from 'react';

function Test8() {
  

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
                animation: turn5 10s linear infinite;
               }
               @keyframes turn5 {
                    0% {
                    transform: rotate3d(0, 0, 0, 0);
                    }
                   
                    100% {
                    transform: rotate3d(5, 5, 3.2, 360deg);
                    }
                  }
              .face{
                width:100px;
                height:100px;
                border-radius: 5rem;
                position: absolute;
                opacity: 0.75;  
              }
           
             
              .face1{
                background-image: url("/img/me3.jpg");
               background-position: center;
               background-size: cover;
                transform: translateZ(55px);
                animation: face1 5s infinite alternate;
              }
              @keyframes face1 {
                    0% {
                      transform: translateZ(55px);
                    }
                   
                    100% {
                      transform: translateZ(85px);
                    }
                  }
          
              .face2{
                background-image: url("/img/me.jpg");
               background-position: center;
               background-size: cover;
                 transform: translateZ(-25px) rotateY(180deg);
                animation: face2 5s infinite alternate;
              }
              @keyframes face2 {
                    0% {
                      transform: translateZ(-25px) rotateY(180deg);
                    }
                   
                    100% {
                      transform: translateZ(-85px) rotateY(590deg);
                    }
                  }
              .face3{
                background-image: url("/img/me2.jpg");
               background-position: center;
               background-size: cover;
                transform: translateX(-25px) rotateY(-90deg);
                animation: face3 5s infinite alternate;
              }
              @keyframes face3 {
                    0% {
                      transform: translateX(-25px) rotateY(-90deg);
                    }
                   
                    100% {
                      transform: translateX(-85px) rotateY(-490deg);
                    }
                  }
              .face4{
                background: radial-gradient(circle, rgb(15, 206, 239)7%, rgba(201, 7, 30, 0) 68%, rgba(255, 255, 255, 0) 100%);
                transform: translateX(25px) rotateY(90deg);
                animation: face4 20s infinite alternate;
              }
              @keyframes face4 {
                    0% {
                      transform: translateX(65px) rotateY(90deg);
                    }
                   
                    100% {
                      transform: translateX(95px) rotateY(1090deg);
                    }
                  }
              .face5{
                background: radial-gradient(circle, rgba(26, 221, 39, 0.62) 0.01%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0) 100%);
                transform: translateY(-25px) rotateX(90deg);
                animation: face5 20s infinite alternate;
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
                background-image: url("/img/mooon.gif");
               background-position: center;
               background-size: cover;
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

export default Test8

