import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const D4 = () => {

  return (
    <>
    <Link href="/posts/music">
    <section>
      <article>
      <div className='absolute'></div>


        <h1>sehen in Ägypten</h1>
        <p>Hace un año, los investigadores del proyecto Scan Pyramids confirmaron la existencia de dos anomalías en la Gran Pirámide: una cavidad desconocida en la esquina noreste y un vacío desconocido detrás de los chevrones que hay sobre el acceso del pasadizo descendente. En esta ocasión se trata de un gran vacío de un mínimo de 30 metros de longitud y cuyo plano podría ser horizontal o inclinado como el de la Gran Galería. La anomalía ha sido detectada mediante una técnica no invasiva, sin tener que taladrar los milenarios bloques de piedra. Los muones son unas partículas ínfimas procedentes del espacio exterior que llegan a la superficie terrestre a través de los rayos cósmicos y que pueden penetrar materiales sólidos como las rocas o los bloques de piedra caliza. Las placas sensibles a los muones, estratégicamente colocadas en el interior de una pirámide, pueden revelar espacios vacíos.

El Ministerio de Antigüedades de Egipto no ha tardado en emitir un comunicado expresando su descontento por el artículo publicado en Nature. Las autoridades egipcias consideran que los investigadores del proyecto Scan Pyramids se han precipitado al anunciar públicamente un supuesto hallazgo sin haberlo discutido previamente con el comité científico de dicho ministerio. "Creo que deberíamos de ser muy cuidadosos con el uso de la palabra 'vacío', pues la Gran Pirámide está llena de vacíos", expresa el egiptólogo Zahi Hawass en Ahram Online. Para Kate Spence, una arqueóloga de la Universidad de Cambridge, el vacío podría ser una rampa interna usada para mover los enormes bloques del techo hasta su lugar y, al continuar la construcción, la rampa pudo quedar vacía o ligeramente rellenada, según explica un artículo sobre el tema en la edición internacional de National Geographic. "A pesar de ser uno de los más antiguos y grandes monumentos de la Tierra, no hay consenso sobre cómo fue construido", dicen acertadamente los investigadores de Scan Pyramids en Nature.</p>
        {/* <div className='jzz'></div> */}
      </article>
    </section>
    </Link>

          <style jsx>{`
            .absolute{
              height: 20px;
              width: 20px;
              border: solid rgb(255, 255, 255) 1px;
              position: absolute;
              animation: absolute infinite alternate 1.5s;
            }
            @keyframes absolute {
                    0% {
                      transform: translateX(0px);
                      border: solid rgb(203, 3, 3) 1px;
                    }
                    90%{
                      transform: translateX(10px) rotateZ(90deg);
                      border: solid rgb(255, 255, 255) 1px;
                      background-color: rgba(0, 0, 0, 0);
                    }
                    100%{
                      transform: translateX(10px) rotateZ(130deg);
                      border: solid rgb(223, 3, 3) 1px;
                      background-color: greenyellow;
                    }
                  }
              
         
          .jzz{
              height: 9rem;
              width:4rem;
              background-image: url("/img/parlantes.png");
              background-size: cover;
              width: 12rem;
            }


            h1{
              text-align: center;
              font-size: 2rem;
              font-family: monospace;
              margin: 0;
              color: rgb(54, 91, 254);
              transform: scale(1);
              animation:  10s infinite alternate;
            }
            {/* @keyframes h1 {
                    from {
                      transform: scale(1);
                      color: rgb(236, 236, 1);
                    }
                    to {
                      transform: scale(1.1);
                      color: rgb(15, 170, 9);
                    }
                  } */}
              p{
                font-weight: 900;
                font-size: 1rem;
                font-family: 'Courier New', Courier, monospace;
                color: rgb(164, 114, 244);
              }

            
            .datenews{
              color: rgb(228, 63, 228);
            }
            .apilink{
              color: rgb(225, 225, 7);
              font-size: 1rem;
            }

section{
  border: rgb(87, 87, 87) solid 2px;
  border-radius: 5px;
      font-family: monospace;
      font-size:1rem;
      line-height: 1.2;
        color: rgb(191, 191, 191);
        width:40rem;
        margin:auto;
        margin-bottom:1rem;
        margin-top: 1rem;
        padding:1rem;
        transition: 0.05s;
    }
    section:hover{
      background-color: rgba(28, 107, 102, 0.355);
      cursor: pointer;
    }
            
    @media (max-width: 600px) {
           h1{
              text-align: center;
              color: rgb(52, 179, 6)
            }
            .datenews{
              color: rgb(28, 181, 11);
            }
            .apilink{
              color: rgb(225, 225, 7);
              font-size: 1rem;
            }
               
                  section{
                  width:95%;
                  margin:auto;
                  margin-bottom:1rem;
                  margin-top: 1rem;
                  padding:1rem;
                      }   

          
      }   
        `}</style>

  </>
  )
}

export default D4