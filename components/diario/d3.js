import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const D3 = () => {

  return (
    <>
    <Link href="/fotos/fotos">
    <section>
      <article>

        <h1>Bilder</h1>
         <span className='datenews'>20/8/2023</span>
        <p>He agregado una seccion donde empezare a subir fotos</p>
    
      </article>
    </section>
    </Link>

          <style jsx>{`
         
            h1{
              text-align: center;
              font-size: 2rem;
              margin: 0;
              color: rgb(182, 182, 71);
              transform: scale(1);
              animation: h1 10s infinite alternate;
            }
            @keyframes h1 {
                    from {
                      transform: scale(1);
                      color: rgb(236, 236, 1);
                    }
                    to {
                      transform: scale(1.1);
                      color: rgb(15, 170, 9);
                    }
                  }
              p{
                font-weight: 900;
                font-size: 1.2rem;
                font-family: 'Courier New', Courier, monospace;
                color: rgb(181, 181, 199);
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
    section:hover{background-color: rgba(28, 107, 102, 0.355);
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

export default D3