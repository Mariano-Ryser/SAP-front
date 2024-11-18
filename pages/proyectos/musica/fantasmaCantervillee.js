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
  G 
Yo era un hombre bueno
C                          G
si hay alguien bueno en esta lugar
G
Pague todas mis deudas  
C                 G
pague mi oportunidad de amar
D
sin embargo estoy tirado
Am                   Em-C
y nadie se acuerda de mi
        G
paso a traves de la gente
            De    C      G
como el fantasma de Canterville

I:
Me han ofendido mucho
y nadie dio una explicacion
Ay! si pudiera odiarlos matarlos
lo haria sin ningun temor
pero siempre fui un tonto
que creyo en la legalidad
ahora que estoy afuera 
ya se lo que es la libertad

I:
Ahora que puedo amarte
yo voy a amarte de verdad
mientras me quede aire
calor nunca te va a faltar
y jamas volvere a fijarme
en la cara de los demas
esa careta idota
 D         C        G-E
que tira y tira para atras

II:
A
He muerto muchas veces
D                      A
acrivillado en A ciudad
A
pero es mejor ser muerto
D                      A
que un numero que viene y va
E
y en mi tumba tengo verbo
Dm                    C#m
y cosas que no me hacen mal
    A
despues de muerto, nena
E                D   A
vos me vendras a visitar.

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
          font-family: "Roboto Mono", monospace;
          border-radius: 5px;
          line-height: 1.5;
        font-size:1rem;
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