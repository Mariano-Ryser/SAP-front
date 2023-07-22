import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const D4 = () => {
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
    <h1>Chat GPT te hago una pregunta</h1>
    <h3> tienes personalidad para responder por ti mismo, y a juicio propio quienes son los mejores interpretes de jazz de la historia? </h3>
    <p>Como inteligencia artificial, no tengo personalidad ni juicio propio. Mi función es proporcionar información y respuestas basadas en el conocimiento con el que fui entrenado. Sin embargo, puedo ofrecerte una lista de algunos de los considerados mejores intérpretes de jazz de la historia, basada en la opinión de expertos y la recepción histórica:</p>
   
   <ul>
    <li><Link  href="https://www.youtube.com/watch?v=YBOoQcoPL1I"><span>Louis Armstrong</span></Link>: Conocido como Satchmo, fue un influyente trompetista y cantante. Su estilo revolucionó el jazz y su habilidad como solista lo convirtió en una figura icónica.</li>
    <li><Link  href="https://www.youtube.com/watch?v=2QbTAHOP8vs"><span>Duke Ellington</span></Link>: Pianista, compositor y líder de una de las orquestas más famosas del jazz. Su música abarcó desde el swing hasta el jazz más sofisticado.</li>
    <li><Link  href="https://www.youtube.com/watch?v=KXP84ijiLbg"><span>Charlie Parker</span></Link>: Saxofonista alto, uno de los pioneros del bebop y uno de los solistas de jazz más influyentes de todos los tiempos.</li>
    <li><Link  href="https://www.youtube.com/watch?v=UlFNy9iWrpE"><span>John Coltrane</span></Link>: Saxofonista tenor y líder de su propio cuarteto. Su estilo vanguardista y espiritual lo convirtió en una figura seminal del jazz moderno.</li>
    <li><Link  href="https://www.youtube.com/watch?v=Q3_3J3HstvA"><span>Miles Davis</span></Link>: Trompetista, líder de banda y compositor. Su carrera abarcó varias etapas y estilos del jazz, desde el bebop hasta el jazz fusión.</li>
    <li><Link  href="https://www.youtube.com/watch?v=s0ZT3J1Oa6w"><span>Billie Holiday</span></Link>: Cantante de jazz con una voz única y emotiva, conocida por sus interpretaciones sinceras y conmovedoras.</li>
    <li><Link  href="https://www.youtube.com/watch?v=b_Fp4znXvOg&t=349s"><span>Thelonious Monk</span></Link>: Pianista y compositor, uno de los innovadores más importantes del jazz moderno. Su estilo pianístico y sus composiciones únicas dejaron una profunda huella en la música.</li>
    <li><Link  href="https://www.youtube.com/watch?v=js6Us255beg"><span>Ella Fitzgerald</span></Link>: Una de las vocalistas más destacadas de la historia del jazz, conocida por su increíble técnica vocal y su habilidad para improvisar.</li>
    <li><Link  href="https://www.youtube.com/watch?v=NTJhHn-TuDY"><span>Oscar Peterson</span></Link>: Virtuoso pianista y compositor, reconocido por su destreza técnica y su capacidad para improvisar.</li>
    <li><Link  href="https://www.youtube.com/watch?v=IZERfh28Od0"><span>Art Tatum</span></Link>: Otro pianista virtuoso conocido por su habilidad asombrosa y única para tocar con gran velocidad y complejidad.</li>
    <li></li>
   </ul>

   <p>Es importante tener en cuenta que esta lista es subjetiva y hay muchos otros intérpretes increíbles que han dejado una marca significativa en la historia del jazz. El jazz es un género musical diverso y rico, y cada oyente puede tener sus preferencias personales sobre quiénes considera los mejores intérpretes.</p>
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
h1{
  color:rgb(223, 223, 11);
}
h3{
  color:rgb(11, 223, 103);
}
span{
  color: yellow;
  cursor: pointer;
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
                    background-color: rgb(255, 5, 5);
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
                    background-color: rgba(69, 11, 186, 0.561);
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
                    background-color: rgba(168, 11, 192, 0.746);
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
                    background-color: rgb(163, 6, 6);
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

export default D4