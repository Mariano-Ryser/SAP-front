import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const D4 = () => {

  return (
    <>
    <Link href="/posts/piramide">
    <section>
      <article>
      <div className='absolute'></div>


        <h1>sehen in Ägypten</h1>
        <p>In recent years, groundbreaking advancements in archaeological technology have offered a fresh perspective on Egypt's iconic pyramids. Among these advancements, the use of ground-penetrating radar (GPR) has enabled researchers to unearth a trove of invaluable information hidden beneath the pyramid's timeless façades.</p>
      
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