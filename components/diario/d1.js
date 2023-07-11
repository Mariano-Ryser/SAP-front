import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const D1 = () => {

  return (
    <>
   <Link href="/cienciados">
    <section>
      <article>

        <h1>API ASTEROIDES READY</h1>
         <span className='datenews'>6/8/2023</span>
        <p>Ya esta disponible API-ASTEROIDES!</p>
        <p>Actualmente tenemos 14 Asteroides con su respectivo nombre, link donde puedes encontrar informacion del mismo, una leve descripcion, la distancia_tierra y su o sus descubridores. </p>
        <p>Aqui te dejo el link donde puedes utilizarla y 100% gratuita</p>
        <p className='apilink'>https://zap-front.vercel.app/api/asteroides</p>
        <p>solo tienes que hacer el FETCH a tu manera, te aconsejos que hagas un console log para poder chequar el json.</p>
        <p>Actualmente hay mas de 1000 Asteroides detectados en el sistema solar, con sus nombres y descripciones del mismo, si se te ocurre agregar algun otro estaremos encantados! </p>
          <div className='luna'></div>
      </article>
    </section>
    </Link>

          <style jsx>{`
            .luna{
              height: 3rem;
              width: 3rem;
              background-image: url("/img/mooon.gif");
              background-size: cover;
            }
            h1{
              text-align: center;
              color: rgb(38, 167, 9)
            }
            .datenews{
              color: rgb(28, 181, 11);
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
      background-color: rgb(42, 42, 42);
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

export default D1