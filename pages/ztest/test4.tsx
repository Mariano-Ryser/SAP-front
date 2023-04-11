import React from 'react'
import { useEffect, useState } from 'react';
// import BoxComentar from '../components/comentarBox/BoxComentar'

function Test4() {


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
                height:12rem;
                width:31rem;
                padding-top:3rem;
               }
              .cube{
                width: 100px;
                height: 100px;
                transform-style: preserve-3d;
                margin: auto;
                animation: turn 4s linear infinite;
                border:solid 1px black;
               }
               @keyframes turn {
                    from {
                    transform: rotate3d(0, 0, 0, 0);
                    }
                    to {
                    transform: rotate3d(1, 0, 0.5, 360deg);
                    }
                  }
              .face{
                width:100px;
                height:100px;
                border:solid black 1px;
                position: absolute;
                opacity: 0.75;  
              }
              .face1{transform: translateZ(50px);
              }
              .face2{transform: translateZ(-50px) rotateY(180deg);
              }
              .face3{transform: translateX(-50px) rotateY(-90deg);
              }
              .face4{
                transform: translateX(50px) rotateY(90deg);
              }
              .face5{
               transform: translateY(-50px) rotateX(90deg);

              }
              .face6{
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

export default Test4

