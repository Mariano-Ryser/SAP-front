import Link from "next/link"
import Image from "next/image"
import React, { useState, useRef, useEffect } from "react";


export default function fantasmaCanterville() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [speed, setSpeed] = useState(70); // Velocidad inicial (más lento por defecto)
  const [hasMounted, setHasMounted] = useState(false); // Control de montaje en cliente
  const scrollTimeout = useRef(null);

  useEffect(() => {
    // Se ejecuta solo en el cliente
    setHasMounted(true);
  }, []);

  const toggleScrolling = () => {
    if (isScrolling) {
      stopScrolling();
    } else {
      startScrolling();
    }
  };

  const startScrolling = () => {
    setIsScrolling(true);
    const scrollStep = () => {
      window.scrollBy({
        top: 1,
        left: 0,
        behavior: "smooth",
      });
      scrollTimeout.current = setTimeout(scrollStep, 220 - speed); // Invertir rango
    };

    scrollStep();
  };

  const stopScrolling = () => {
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = null;
    setIsScrolling(false);
  };

  if (!hasMounted) {
    return null; // Evita renderizar hasta que el componente se haya montado
  }

  return (
    <>
     <Link href="/proyectos/musica/musicaList"><li>/volver</li></Link>
  <button onClick={toggleScrolling} className="scroll-button">
        {isScrolling ? "Detener" : "Bajar"}
      </button>
      <label className="velocidad">
        Velocidad:
        <input
          type="range"
          min="50"
          max="200"
          step="10"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </label>
    <div className="container">
 <div>
  <pre className="song">
 {`
 FANTASMA DE CANTERVILLE
\t\t\tG
Yo era un hombre bueno 
\tC\t\t\t\t\t\t\tG
si hay alguien bueno en esta lugar
\t\tG
Pague todas mis deudas y
C\t\t\t\t\t\tG              
mi oportunidad de amar
\t\tD
sin embargo estoy tirado
\tAm\t\tBm    \t Em -C
y nadie se acuerda de mi
\t\t\tG
paso a traves de la gente
\t \t \tD \t\t \t C \t\t   G
como el fantasma de Canterville

\t\t\t     G
Me han ofendido mucho
\tC
y nadie dio una explicacion
\t\t\tG
Ay! si pudiera matarlos
\t\tC
lo haria sin ningun temor
\t\tD
pero siempre fui un tonto
\tAm              \tBm \t Em -C
que creyo en la legalidad
\t\t\t\tG
ahora que estoy afuera
\tD                   G
ya se lo que es la libertad
\t\t\t     G
Ahora que puedo amarte
\tC
yo voy a amarte de verdad
\t\t\tG
mientras me quede aire
C
calor nunca te va a faltar
\t\tD
y jamas volvere a fijarme
\tAm              Bm \t Em \t-C
en la cara de los demas
\tG
esa careta idota
 D \t\t\t\tC              E
que tira y tira para atras

Riff 2 (ritmo de blues)

\t\t\t\tA
 He muerto muchas veces
\tD            \t\tA
Acribillado en la ciudad
\t\t\tA
pero es mejor ser muerto
\t\tD \t\t\t\t\t\tA
que un numero que viene y va
\t\t\tE
y en mi tumba tengo discos
\tBm \t\t\tC#m         F#m
y cosas que no me hacen mal
\t\t\t\tA
despues de muerto, nena
\tE\t\t\t\tF#m D
vos me vendras a visitar
\t\t\t\tA
despues de muerto, nena
\t\tE\t\t\tF#m D
vos me vendras a visitar
\t\t\t\tA
despues de muerto, nena
\tE  \t\t\t\tA
vos me vendras a visitar

 `} </pre> </div>
</div>

      <style jsx>{`
        .scroll-button {
          position: fixed;
          bottom: 20px;
          left: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: ${isScrolling ? "#ff0000" : "#0076f2"};
          color: white;
          border: none;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: background-color 0.3s ease;
          z-index: 1000;
        }
        .velocidad {
         
        }

        .scroll-button:hover {
          background-color: ${isScrolling ? "#cc0000" : "#005bb5"};
        }

        .song {
          font-family: lato;
          border-radius: 5px;
          line-height: 1.5;
        font-size:1.2rem;
        }
        .container{
          backdrop-filter: blur(20px);
      padding: 0px 0rem 0px 1rem;
      border-radius: 10px;
    }

@media (max-width: 600px) {
   
         `}</style>
   

    </>
  
  );
}