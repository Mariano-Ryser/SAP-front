import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

  export default function CambiosExtraños() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [speed, setSpeed] = useState(70);
    const [hasMounted, setHasMounted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollTimeout = useRef(null);
  
    const modalContentRef = useRef(null);
  
    useEffect(() => {
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
        const scrollContainer = isModalOpen
          ? modalContentRef.current
          : window;
  
        scrollContainer.scrollBy({
          top: 1,
          left: 0,
          behavior: "smooth",
        });
  
        scrollTimeout.current = setTimeout(scrollStep, 220 - speed);
      };
  
      scrollStep();
    };
  
    const stopScrolling = () => {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = null;
      setIsScrolling(false);
    };
  
    if (!hasMounted) {
      return null;
    }
  
  return (
    <>
        <Link href="/proyectos/musica/musicaList">
        <li>/volver</li>
      </Link>
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
          <pre className="song" onClick={() => setIsModalOpen(true)}> {`
CAMBIOS EXTRAÑOS

C#                                   G#
Yo vivia muy bien y con lujos todo poseía
                                              C#
No tenia que desear, pues todo fue de mi elección
                                          D#
Pero sin avisar como Bomba aterriza un intruso
 G#                                         C#
Mi vida tranquila de pronto comienza a cambiar...


      F#          F       A#m   G#           F#
Me quede sin una amistad!! mis amigos ya no están
      D#             G#           C#
Y el remedio que me queda es aguantar
      F#          F7               G#           A#m
Fui temido y respetado!! (respetado) pero se acabo !!
      D#                          G#
Y perdi el amor de quien he amado yo


 Bbm              G#
Cambios extraños que hay en mi
 Bbm           G#
Caaaaaaaaammmbios
 C#          F#                  G#             C#
Cambios extraños que hay en mi, y no hay duda alguna

 C#                                       G#
El amigo que crees conocer resulta un extraño
                                     C#
Y no te descuides pues solo te quedaras
                                                   D#
Celebra tus bromas te crees aceptado pero peligras eeh
 G#                                   C#
Acabas en un armario pues ya te olvido


Bbm              G#
Cambios extraños que hay en mi
 Bbm           G#
Caaaaaaaaammmbios
 C#          F#                  G#             C#
Cambios extraños que hay en mi, y no hay duda alguna


Bbm              G#
Cambios extraños que hay en mi
 Bbm           G#
Caaaaaaaaammmbios
 C#          F#                  G#             C#




`}
          </pre>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
       <div className="modal">
          <pre className="song-modal" ref={modalContentRef}>
              {`
CAMBIOS EXTRAÑOS

C#                                   G#
Yo vivia muy bien y con lujos todo poseía
                                              C#
No tenia que desear, pues todo fue de mi elección
                                          D#
Pero sin avisar como Bomba aterriza un intruso
 G#                                         C#
Mi vida tranquila de pronto comienza a cambiar...


      F#          F       A#m   G#           F#
Me quede sin una amistad!! mis amigos ya no están
      D#             G#           C#
Y el remedio que me queda es aguantar
      F#          F7                G#         A#m
Fui temido y respetado!! (respetado) pero se acabo !!
      D#                          G#
Y perdi el amor de quien he amado yo


 Bbm              G#
Cambios extraños que hay en mi
 Bbm           G#
Caaaaaaaaammmbios
 C#          F#                  G#             C#
Cambios extraños que hay en mi, y no hay duda alguna

 C#                                       G#
El amigo que crees conocer resulta un extraño
                                     C#
Y no te descuides pues solo te quedaras
                                                   D#
Celebra tus bromas te crees aceptado pero peligras eeh
 G#                                   C#
Acabas en un armario pues ya te olvido


Bbm              G#
Cambios extraños que hay en mi
 Bbm           G#
Caaaaaaaaammmbios
 C#          F#                  G#             C#
Cambios extraños que hay en mi, y no hay duda alguna


Bbm              G#
Cambios extraños que hay en mi
 Bbm           G#
Caaaaaaaaammmbios
 C#          F#                G#           C#





`}
            </pre>
          <button
            className="scroll-button-modal"
            onClick={toggleScrolling}
          >
            {isScrolling ? "Detener" : "Bajar"}
          </button>
          <button className="close-button" onClick={() => setIsModalOpen(false)}>
            Cerrar
          </button>
        </div>
      )}

      <style jsx>{`
        .scroll-button {
          position: fixed;
          bottom: 20px;
          left: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: ${isScrolling ? "#ff0000" : "#0070f3"};
          color: white;
          border: none;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: background-color 0.3s ease;
          z-index: 1000;
        }

        .scroll-button:hover {
          background-color: ${isScrolling ? "#cc0000" : "#005bb5"};
        }

        .song {
          font-family: "Roboto Mono", monospace;
          border-radius: 5px;
          line-height: 1.5;
          font-size: 0.64rem;
          cursor: pointer;
        }

        .container {
  
          backdrop-filter: blur(20px);
          padding: 0px 0rem 0px 1rem;
          border-radius: 10px;
        }
    
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 103%;
          height: 100%;
          background: white; /* Fondo negro */
          display: flex;
          align-items: center;
          z-index: 9999;
          overflow: hidden; /* Evitar que el texto salga del modal */
        }

        .song-modal {
          background: white; /* Fondo negro */
          color: black;
          font-family: "Roboto Mono", monospace;
          letter-spacing: -0.005rem;
          font-size: 2vw; /* Texto adaptable */
          line-height: 1.5;
          width: 96%;
          height: 100%;
          overflow-y: auto;
          word-wrap: break-word; /* Evitar que el texto salga */
          white-space: pre-wrap; /* Mantener el formato del texto */
          margin: 0 auto;
        }

        .scroll-button-modal {
          position: fixed;
          bottom: 20px;
          left: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: ${isScrolling ? "#ff0000" : "#0070f3"};
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          z-index: 10000; /* Encima del contenido */
        }

        .close-button {
          position: fixed;
          top: 10px;
          right: 10px;
          background-color: black;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          z-index: 10000;
        }

        @media (max-width: 600px) {
          .song-modal {
            font-size: 3vw; /* Letra más grande en pantallas pequeñas */
          }
        }
      `}</style>
    </>
  );
}