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
    <h1>La Interacción de Cerebros: Hacia una Conciencia Colectiva</h1>
    <p>La actividad cerebral no se limita a los confines físicos del cráneo. Aunque el cerebro se estructura como un entramado de neuronas que interactúan entre sí, su verdadera naturaleza podría trascender su arquitectura biológica. Más allá de los impulsos eléctricos que recorren sinapsis individuales, parece emerger un fenómeno colectivo, una red que no solo conecta neuronas, sino cerebros completos en una interacción intracerebral.</p>
    <p>Al igual que las neuronas configuran redes que dan lugar a procesos cognitivos superiores, los cerebros humanos, al interactuar, podrían formar un organismo superior. Este "organismo" no es una entidad biológica per se, sino una red de comunicación que unifica las mentes en un nivel profundo. Llamémoslo el Hipercampo, un espacio compartido de intercambio constante de información, donde cada cerebro no es solo emisor de datos, sino también receptor y modulador de la actividad de otros.
    </p>
    <p>El Hipercampo no opera únicamente como un flujo pasivo de datos, sino que influye directamente en la actividad cerebral individual. Cada pensamiento, emoción y percepción que ocurre en una mente contribuye a este campo colectivo, al mismo tiempo que es moldeado por él. Esta retroalimentación sugiere que, aunque nuestras experiencias puedan parecer individuales, están profundamente entrelazadas con las de los demás.
    </p>
    <p>Desde esta perspectiva, la "individualidad" cerebral podría ser una ilusión funcional, una herramienta evolutiva para operar en un mundo físico. Sin embargo, la verdadera esencia de nuestra actividad mental reside en su capacidad de interactuar más allá de los límites del cuerpo. De esta forma, la humanidad no sería un conjunto de individuos aislados, sino una red interconectada, una conciencia colectiva que evoluciona y se adapta en conjunto.
    </p>
    <p>¿Podríamos estar a las puertas de comprender un nuevo paradigma de existencia? Si aceptamos que la actividad cerebral trasciende el cráneo, debemos replantearnos qué significa ser consciente. Tal vez la verdadera "inteligencia" no radique en un cerebro aislado, sino en su capacidad para formar parte de algo más grande: un sistema interconectado que nos define tanto como nosotros lo definimos.
    </p>
    <p>Esta visión no solo redefine los límites de la neurociencia, sino también de nuestra comprensión de la humanidad misma. En el Hipercampo, todos somos uno y muchos al mismo tiempo, navegando en un flujo incesante de conexiones que da forma a la realidad compartida.
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