import React, { useState, useEffect } from 'react';


const Inteligence = () => {
  const initialState = (1)
  const [gross, setGross] = useState(initialState)

  const grosse = ()=> {
      setGross(gross + 0.05)
  }

  const grosseOut = ()=>{
    setGross(gross - 0.05)
  }
  return (
    <>
  <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
    <h1>Die persönliche Intelligenz</h1>
    
    <p>Die persönliche Intelligenz spielt eine entscheidende Rolle, wenn es darum geht, ein gesundes und erfülltes Leben in unserer Welt zu führen. Es geht nicht nur darum, über mathematische oder wissenschaftliche Kenntnisse zu verfügen, sondern auch um die Fähigkeit, kluge Entscheidungen zu treffen, die unsere Gesundheit und unser Wohlbefinden fördern.</p>
   
  
    <p>Intelligente Lebensführung bedeutet, sich bewusst für eine ausgewogene Ernährung, regelmäßige Bewegung und ausreichenden Schlaf zu entscheiden. Es bedeutet auch, die Bedeutung von Stressmanagement und mentaler Gesundheit zu erkennen. Durch die Entwicklung von emotionaler Intelligenz können wir besser mit den Herausforderungen des Lebens umgehen und unsere Beziehungen zu anderen Menschen verbessern.</p>
    <p>Die Fähigkeit, Informationen kritisch zu hinterfragen und fundierte Entscheidungen zu treffen, ist ebenfalls ein wichtiger Aspekt der persönlichen Intelligenz. Dies ermöglicht es uns, fundierte Entscheidungen in Bezug auf Umweltschutz, soziale Verantwortung und unser allgemeines Wohlbefinden zu treffen.</p>
    <p>Kurz gesagt, die persönliche Intelligenz ist der Schlüssel zu einem gesunden und positiven Leben in unserer heutigen Welt. Sie hilft uns, kluge Entscheidungen zu treffen, die sowohl unserem eigenen Wohl als auch dem Wohl der Gesellschaft dienen.</p>
    <p></p>


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

export default Inteligence