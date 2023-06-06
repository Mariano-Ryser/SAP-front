import React, { useState, useEffect } from 'react';


const TestPagination = () => {
  const initialState = (1.3)
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
    
    <h1>Bloqueo en programacion?</h1>
     
    
    <p> Si te sientes bloqueado y no encuentras avances.. puedes leer los siguientes consejos.</p>
    <p>1 - Explora proyectos de código abierto: Busca en plataformas como GitHub proyectos de código abierto que te interesen. Puedes contribuir a estos proyectos o tomar ideas y adaptarlas a tus propias necesidades.</p>
    
   
    
    <p>2 - Participa en comunidades de programación: Únete a foros, grupos de discusión o comunidades en línea donde los programadores comparten ideas y proyectos. Puedes obtener inspiración y recibir sugerencias de otras personas.</p>

 
    
    <p>3 - Realiza pequeños desafíos de programación: Hay muchos sitios web que ofrecen desafíos de programación, como Codewars o LeetCode. Resuelve problemas de programación en diferentes lenguajes para ejercitar tu mente y estimular la creatividad.</p>

    
   
    <p>4 - Aprende una nueva tecnología o lenguaje de programación: Ampliar tus habilidades en una nueva tecnología o lenguaje de programación puede abrirte nuevas posibilidades. Investiga sobre tendencias actuales y aprende algo nuevo que te interese.</p>

   
    
    <p>5 - Automatiza tareas: Observa tu vida diaria y busca tareas repetitivas o tediosas que puedas automatizar mediante la programación. Puede ser desde una herramienta personalizada para organizar tus archivos hasta un script que realice tareas de mantenimiento en tu sistema.</p>

    
    
    <p>6 - Piensa en problemas cotidianos: Considera los desafíos o problemas que enfrentas en tu vida cotidiana y piensa en cómo la programación puede ayudar a resolverlos o mejorarlos. Puede ser una aplicación móvil, un sitio web o un sistema de gestión.</p>

   
    
    <p>7 - Crea un proyecto personal: Dedica tiempo a explorar tus propias ideas y pasiones. Piensa en proyectos que te gustaría desarrollar o en problemas que te gustaría resolver. Esto puede ser una excelente manera de motivarte y encontrar inspiración.</p>

   
    
    <p>8 - Mantén un registro de ideas: Lleva contigo un cuaderno o utiliza una aplicación en tu dispositivo para anotar cualquier idea que surja, incluso si en ese momento no parece viable o relevante. Puede que más adelante encuentres una forma de desarrollarla.</p>

   
    
    <p>Recuerda que el bloqueo de programación es algo común y le ocurre a todos los programadores en algún momento. No te desanimes y prueba diferentes enfoques hasta que encuentres la inspiración. ¡Buena suerte en tus proyectos!</p>

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

export default TestPagination