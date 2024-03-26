import React, { useState, useEffect } from 'react';


const Piramide = () => {
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
    <h1>Gran Vacio Piramide</h1>
    <p>Hace un año, los investigadores del proyecto Scan Pyramids confirmaron 
    la existencia de dos anomalías en la Gran Pirámide: una cavidad desconocida 
    en la esquina noreste y un vacío desconocido detrás de los chevrones que hay sobre
     el acceso del pasadizo descendente. En esta ocasión se trata de un gran vacío de un mínimo
      de 30 metros de longitud y cuyo plano podría ser horizontal o inclinado como el de la Gran Galería.
       La anomalía ha sido detectada mediante una técnica no invasiva, sin tener que taladrar los milenarios
        bloques de piedra. Los muones son unas partículas ínfimas procedentes del espacio exterior que
         llegan a la superficie terrestre a través de los rayos cósmicos y que pueden penetrar materiales 
         sólidos como las rocas o los bloques de piedra caliza. Las placas sensibles a los muones, 
         estratégicamente colocadas en el interior de una pirámide, pueden revelar espacios vacíos.

El Ministerio de Antigüedades de Egipto no ha tardado en emitir un comunicado 
expresando su descontento por el artículo publicado en Nature. Las autoridades 
egipcias consideran que los investigadores del proyecto Scan Pyramids se han 
precipitado al anunciar públicamente un supuesto hallazgo sin haberlo discutido 
previamente con el comité científico de dicho ministerio. 
Creo que deberíamos de ser muy cuidadosos con el uso de la palabra, vacío,
 pues la Gran Pirámide está llena de vacíos, expresa el egiptólogo Zahi Hawass en Ahram Online.
  Para Kate Spence, una arqueóloga de la Universidad de Cambridge, el vacío podría ser una rampa 
  interna usada para mover los enormes bloques del techo hasta su lugar y, al continuar la construcción,
   la rampa pudo quedar vacía o ligeramente rellenada, según explica un artículo sobre el tema en la edición
    internacional de National Geographic. A pesar de ser uno de los más antiguos y grandes monumentos de la Tierra,
     no hay consenso sobre cómo fue construido, dicen acertadamente los investigadores de Scan Pyramids en Nature.</p>
   
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

export default Piramide