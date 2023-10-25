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
    <h1>El mago Martincito</h1>
    <p>Había una vez un niño llamado Martín, quien vivía en un pequeño pueblo rodeado de colinas y bosques. Desde muy temprana edad, Martín tenía un sueño: quería convertirse en el mejor mago del mundo. Pasaba horas y horas leyendo libros de hechizos, practicando trucos con su varita mágica de juguete y soñando con los espectáculos que algún día ofrecería.</p>

    <p>Sin embargo, en su pueblo, no había nadie que pudiera enseñarle el arte de la magia. Los demás niños se burlaban de él y le decían que sus sueños eran imposibles. Pero Martín no se dejaba desanimar. Sabía que para alcanzar sus metas, tendría que ir más allá de las fronteras de su pequeño mundo.</p>

    <p>Un día, Martín decidió emprender un viaje en busca de su sueño. Se despidió de su familia y amigos, quienes lo veían con preocupación y dudas. Caminó durante días, atravesando bosques oscuros y subiendo altas montañas, sin saber qué obstáculos se encontraría en su camino.</p>

    <p>En su travesía, Martín cometió errores y sufrió golpes de la vida. A veces se sentía desanimado y tentado a rendirse, pero recordaba su pasión por la magia y el deseo de hacer realidad sus sueños. Cada vez que caía, se levantaba con más fuerza y determinación.</p>

    <p>Finalmente, Martín llegó a una gran ciudad donde encontró una escuela de magia. El director de la escuela, el profesor Alazar, vio algo especial en él y decidió darle una oportunidad. Martín se unió a la escuela y comenzó a aprender de los mejores magos del mundo.</p>

    <p>El camino no fue fácil. Martín cometió muchos errores en sus primeros intentos de realizar trucos y a menudo se sentía frustrado. Pero con cada error, aprendía una lección valiosa y mejoraba sus habilidades. Los demás estudiantes se burlaban de él al principio, pero pronto se dieron cuenta de su determinación y espíritu incansable, y comenzaron a admirarlo.</p>

    <p>Con el tiempo, Martín se convirtió en un mago excepcional. Sus espectáculos eran asombrosos y llenos de magia genuina. Viajó por todo el mundo, llevando su arte a personas de diferentes culturas y países. Martín había logrado su sueño y se convirtió en uno de los magos más reconocidos y queridos del mundo.</p>

    <p>Aunque había enfrentado muchos obstáculos y dificultades en su camino, Martín nunca dejó que los errores y golpes de la vida lo detuvieran. Su determinación y pasión por la magia lo llevaron a alcanzar las estrellas y demostrarle al mundo que los sueños realmente pueden hacerse realidad, incluso cuando todo parece imposible.</p>

    <p>Y así, el niño que una vez fue ridiculizado por sus sueños se convirtió en un ejemplo de perseverancia y éxito para todos los que lo conocieron. Martín demostró que, sin importar cuántos errores cometas o cuántos golpes recibas, siempre puedes seguir adelante si nunca dejas de creer en ti mismo y en tus sueños. </p>
 
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