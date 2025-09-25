import { useEffect, useCallback, useRef, useState } from 'react';
import { AnimatedText, AnimatedWords, AnimatedPhrases } from "../components/animations"


export default function Home() {

   const phrases = [
 "פהל",
 "ילי",
 "מהש",
  ];

  return ( 
    <>
      <div className="container">
   
      <div className="slogan">
        <AnimatedPhrases
          phrases={phrases}
          animationType="zoom"
          duration={1.2}
          interval={4}
        /></div>





    </div> 

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 0 1rem;
          display: grid;
          gap: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0rem;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}