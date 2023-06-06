import React, { useState, useEffect } from 'react';


const Trabajaenti = () => {
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
    <h1>Trabaja en ti mismo</h1>
    <p>Trabaja y gasta tiempo en ti, y en las cosas que te llenan. Estas palabras encierran una valiosa lección sobre la importancia de priorizar nuestro bienestar y perseguir nuestras pasiones en la vida. En un mundo acelerado y lleno de responsabilidades, a menudo nos dejamos llevar por la corriente y nos olvidamos de invertir en nosotros mismos.</p>
    <p>La idea de trabajar en uno mismo puede adoptar muchas formas. Puede significar dedicar tiempo a aprender nuevas habilidades, adquirir conocimientos o desarrollar talentos que nos apasionan. Es un recordatorio para invertir en nuestro crecimiento personal y profesional, sin importar cuán ocupadas sean nuestras vidas.</p>
    <p>La sociedad nos ha inculcado la idea de que debemos estar constantemente ocupados y enfocados en nuestros objetivos profesionales. Si bien es importante tener ambiciones y trabajar arduamente para construir nuestro futuro, también es fundamental equilibrar nuestras vidas y asegurarnos de que estamos nutriendo nuestra esencia.</p>
    <p>Gastar tiempo en las cosas que nos llenan es un componente esencial de esta ecuación. Las cosas que nos llenan son aquellas actividades que nos brindan alegría, satisfacción y una sensación de plenitud. Pueden ser hobbies, pasatiempos, actividades creativas o simplemente momentos de paz y tranquilidad. Son esas actividades que nos permiten desconectar del estrés diario y nos recargan de energía positiva.</p>
    <p>Construir nuestro futuro también es un aspecto crucial de este proceso. Sin embargo, es importante recordar que construir un futuro no solo se trata de logros materiales o éxito profesional. Implica crear una vida equilibrada y significativa, donde nuestras acciones estén alineadas con nuestros valores y objetivos más profundos.</p>
    <p>Al trabajar en nosotros mismos, creamos una base sólida para construir un futuro significativo. Al invertir en nuestro crecimiento personal, adquirimos habilidades y perspectivas que nos ayudarán a enfrentar los desafíos que la vida nos presente, y no sera motivo de la suerte. Al dedicar tiempo a las cosas que nos llenan, nos conectamos con nuestra verdadera esencia y encontramos un sentido de propósito.</p>
    <p>No olvides que solo tienes una vida y es crucial aprovecharla al máximo. Trabaja en ti mismo, invierte en tu bienestar y haz las pequeñas cosas que te hagan feliz. Estas acciones no solo te beneficiarán a ti, sino que también te permitirán construir un futuro enriquecedor y satisfactorio. Recuerda siempre la importancia de equilibrar el trabajo y la dedicación a ti mismo, porque solo al hacerlo serás capaz de vivir una vida plena y auténtica.</p>
   
  
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

export default Trabajaenti