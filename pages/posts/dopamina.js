import React, { useState, useEffect } from 'react';
// import Image from "next/image"

const Dopamina = () => {
const dopamina = "dopamina.png"
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
    
    {/* <a target='_blank' rel="noopener noreferrer" href=''></a> 
   */}
  <section className='section' style={{ fontSize: `${gross}` + "rem"}}>
 
  {/* <div className='img' 
              style={{backgroundImage: `url('/dopamina/${dopamina}')`}}
        ></div> */}

    <h1>Desintoxicacion Dopaminica</h1>
    <p>
        Y si te dijera que la desintoxicacion dopaminica es la luz alfinal del tunel?
        ese claro oscuro que se observa desde la boca del pozo en el caul actualmente te encuentras.
        Y no, no solo tu, Todos nos estamos habituando a observar la vida atravez del circulo del blanco y
         negro del placer instantaneo abandonando el color que da a la vida los valores tradicionales que tanto nos han alabado como humanidad.
         <br></br>
         <br></br>
         Hemos pasado de vivos muriendo, a muertos vivientes.
         Las maravillosas y pequeñas cosas de la vida, han caido en el olvido,
         mientras ignoramos que en la disiplina se encuentra el portal a la libertad y la felicidad,
         buscamos como yonquis el proximo hit dopaminico, ya sea con la comida rapida, la compra compulsiva,
         la autosatisfaccion sexual desmesurada o el abuso de redes sociales.
         <br></br>
         <br></br>
         Scrolleamos aplicaciones como simios dorados de nariz chata saltando de arbol en arbol
         ignorando la maravillosa realidad que nos rodea, no sabemos estar solos ya no sabemos enfocarnos, tenemos miedo de afrontar
         la incertidumbre el futuro. y dime! cuando fue la ultima vez que tomaste ese riesgo calculado que te permitio progresar?
         ya ni te debes acordar, compramos cosas que no necesitamos, con dinero que no tenemos para sorprender a personasa que no le importamos,
         con el fin de obtener validacion.
         Estamos a merced de poderosas companias con vastas cantidades de poder y recursos que no dudaran en robarte hasta la ultima gota que tengas, aunque eso implique que vivas una vida decadente
         depresiva y miserable, pero hoy me gustaria presentarles el antidoto que todo el mundo necesita.
         </p>
         <h2>El antidoto para una sociedad enferma</h2>
         <p>conciste durante 24 horas, de forma semanal, abstencion absoluta de toda actividad dispositivo, input, experiencia que nos haga segregar dopamina, podemos hacerlo 
            de 2 maneras.
         </p>
         
            <ul>
                <li>Buscamos esas actividades que nos hacen segregar dopamina de forma inmediata, es decir sin esfuerzo previo.</li>
            <br></br>
            
                <li>Seguir un metodo harcore, seguir un metodo estricto en el que vamos a eliminar toda actividad que produzca el minimo grado de dopamina.</li>
            <br></br>
            </ul>
            <p>
            Lo unico que estaria permitido en esta segunda, seria.
            Beber agua, meditar, lectura, paseos, movilidad, organizacion, cocinar y estar en silencio.
            en ambos casos quedan afuera el mobil, la musica, la television, redes sociales, relaciones sociales, comida prosesada, etc.
            <br></br>
            <br></br>
             !Atencion, esto lo hariamos 24 horas durante 1 dia a la semana.
           
            </p>



    
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
          .img{
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin:auto;
                    height:25rem;
                    width: 100%;
                  }

          a{
  color:yellow;
 } 
h1,h2,h3{
  color:white;
}

    section{
      font-family: monospace;
      font-size:1.3rem;
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
                    width: 100%;
                    {/* border: solid 1px black; */}
                  }
      }   
        `}</style>

  </>
  )
}

export default Dopamina