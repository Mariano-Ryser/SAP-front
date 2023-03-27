import React from 'react'
import { useEffect, useState } from 'react';

function Test7() {

  if (typeof window !== "undefined") {
    var box = document.querySelector<HTMLElement>(".box")
  }
  function click(){
    box.style.backgroundColor = "red"
  }
  console.log(box)


var speeds = {
  pause:500,
  slow:120,
  normal:70,
  fast:40
}

    var textLines = [
      {string: "Hey",speed:20},
      {string: "What's up?",speed:20}
    ]


return (
  <>
  <div className='box' onClick={click}></div>

   
   <style jsx>{`
                  .box{
                    background-color:pink;
                    margin: auto;
                    width: 100%;
                    height: 30rem;
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

export default Test7

