import React from 'react'
import { useEffect, useState } from 'react';

function Test9() {
  

return (
  <>
  
  <div className='box'>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    <div className='l1 '></div>
    
  </div>
   
   
   <style jsx>{`
    .l1{
      margin: 3px 1px 1px 6px;
      display: inline-block;
      background-color: rgba(82, 176, 0, 0.743);
      border: solid black 1px;
      height: 1rem;
      width: 1rem;
    }
               .box{
                border: solid red 1px;
                height:10rem;
                width:40rem;
                margin: auto;
               }
             
           
                                
@media (max-width: 600px) {
                 .box{
                  width: 95%;
                  }
                
}
         `}</style>
 </>
  )
}

export default Test9

