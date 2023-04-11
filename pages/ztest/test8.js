import React from 'react'
import { useEffect, useState } from 'react';

function Test8() {
  

return (
  <>
  
  <div className='box'>


  </div>


   

   <style jsx>{`
                  .box{
                    background-color:pink;
                    margin: auto;
                    width: 100%;
                    height: 30rem;
                  } 

                  .text {
                    border: solid black 2px;
                    border-radius: 7px;
                    font-size: 4vw;
                    word-spacing: 0.2em;
                    margin: 0 auto;
                    background: #fff;
                    padding: 1em;
                    border-bottom: 1vw solid #0e6dad;
                    position:relative;
                    line-height: 1.2em;
                    }
                    .corner {
                    position:absolute;
                    width: 5vw;
                    right:2vw;
                    bottom:0;
                    transform: translateY(80%); 
                    }
                  .text span{
                    opacity: 0;
                  }
                  .text span.revealed{
                    opacity: 1;
                  }
                  .text span.green {
                    color:rgb(88, 199, 23);
                  }
                  .text span.red {
                    color:rgb(231, 8, 8);
                  }
                @media (max-width: 600px) {
                 .box{
                    margin: auto;
                    width: 100%;
                    height: 30rem;
                  } 
}
         `}</style>
   
 </>
  )
}

export default Test8

