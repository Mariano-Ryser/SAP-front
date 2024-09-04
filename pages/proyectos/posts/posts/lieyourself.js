import React, { useState, useEffect } from 'react';


const Lie = () => {
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
    <h1>Lie your self</h1>

    <h3>No lo tomes a ciencia cierta... </h3>

    <p>Tendemos a asociar la idea de engañarnos a nosotros mismos con algo negativo, como si fuera un acto de deshonestidad. Sin embargo, en ciertas circunstancias, mentirnos a nosotros mismos puede ser una herramienta valiosa para fomentar el crecimiento personal y encontrar la motivación necesaria para superar los desafíos. Permíteme compartir contigo algunas reflexiones sobre cómo el autoengaño puede ser beneficioso y positivo en nuestra vida.</p>
    <p>A veces, cuando nos enfrentamos a situaciones difíciles o a metas aparentemente inalcanzables, es importante creer en nosotros mismos, incluso si en ese momento no sentimos confianza. Engañarnos al convencernos de que somos capaces y estamos preparados para el desafío puede ser el primer paso hacia el éxito. Esta ilusión inicial de confianza nos brinda la valentía y la determinación necesaria para tomar medidas y avanzar en la dirección correcta.</p>
    <p>El autoengaño también puede ayudarnos a superar momentos de adversidad emocional. Cuando nos enfrentamos a la pérdida, el rechazo o la decepción, es natural sentirnos abatidos y desmotivados. Sin embargo, engañarnos al decirnos a nosotros mismos que esta situación difícil es solo temporal y que hay un futuro más brillante por delante, nos permite mantener la esperanza y encontrar la fuerza para seguir adelante. Al hacerlo, nos brindamos la oportunidad de sanar, aprender y crecer a partir de esas experiencias desafiantes.</p>
    <p>beneficioso y positivo... debes estar en equilibrio con la realidad. No se trata de vivir en una fantasía constante o ignorar los hechos! , sino de utilizarlo como una herramienta temporal para superar desafíos y mantener una mentalidad optimista. ser conscientes de nuestras acciones y, enfrentar la verdad y tomar medidas para resolver los problemas que surjan.</p>
    <p>En resumen, engañarse no siempre es algo negativo, puede potenciar nuestra confianza, superar obstáculos emocionales y desarrollar una mentalidad positiva. Siempre y cuando seamos conscientes de su propósito y mantengamos un enfoque realista en nuestras vidas, el autoengaño puede ser una herramienta valiosa en nuestra búsqueda del crecimiento personal y el bienestar emocional.</p>


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


section{
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

export default Lie