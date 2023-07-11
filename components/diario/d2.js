import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const TestPagination = () => {

  return (
    <>
    <Link href="/posts/nodejs">
    <section>
      <article>

        <h1>Node Js y sus file systems</h1>
         <span className='datenews'>11/8/2023</span>
        <p>Empeze a implementar file systems, y pienso que es muy interesante el saber utilizarlos.</p>
    <ul>
      <li>fs.readFile()</li>
      <li>fs.readFileSync()</li>
      <li>fs.writeFile()</li>
      <li>fs.writeFileSync()</li>
    </ul>
        <div className='node'></div>
      </article>
    </section>
    </Link>

          <style jsx>{`
          .node{
              height: 4rem;
              width:4rem;
              background-image: url("/img/node.png");
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

export default TestPagination