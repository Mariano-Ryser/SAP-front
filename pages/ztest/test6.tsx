import React from 'react'


function Test6() {
// var container = document.querySelector(".text")



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
  

   
   <style jsx>{`
                  .box{
                    background-color:rgb(54, 54, 54);
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

export default Test6

