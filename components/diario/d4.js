import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const D4 = () => {

  return (
    <>
    <Link href="/posts/jzz">
    <section>
      <article>

        <h1> te hago una pregunta...</h1>
        <p> tu que piensas ? Quienes son los mejores interpretes de jazz de la historia?</p>
    
        <div className='jzz'></div>
      </article>
    </section>
    </Link>

          <style jsx>{`
          .jzz{
              height: 4rem;
              width:4rem;
              background-image: url("/img/trumpet.png");
              background-size: cover;
              width: 12rem;
            }
            h1{
              text-align: center;
              font-size: 2rem;
              margin: 0;
              color: rgb(232, 19, 193);
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
                color: rgb(64, 252, 252);
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

export default D4