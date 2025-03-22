import { useState, useRef, useEffect } from 'react';

export default function Ruleta() {
  const numerosRuleta = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
  ];

  // Combinaciones de números
  const combinaciones = {
    c1: [0, 3, 7, 12, 15, 18, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    c2: [1, 2, 4, 5, 6, 9, 10, 13, 14, 16, 17, 20, 22, 23, 24, 29, 31, 33, 35],
    c3: [1, 2, 5, 6, 8, 11, 13, 16, 17, 23, 25, 26, 27, 28, 29, 30, 32, 34, 35, 36],
    c4: [0, 1, 2, 3, 4, 5, 9, 12, 13, 14, 15, 16, 17, 19, 21, 26, 28, 30, 32, 35],
    c5: [0, 3, 4, 8, 9, 10, 11, 12, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
  };

  const [seleccionados, setSeleccionados] = useState(new Set());
  const [lanzando, setLanzando] = useState(false);
  const pelotaRef = useRef(null);
  const anguloRef = useRef(0); // Ángulo actual de la pelota
  const velocidadRef = useRef(0); // Velocidad actual de la pelota
  const animacionIdRef = useRef(null); // ID de la animación

  // Función para obtener el color de un número
  const getColor = (numero) => {
    if (numero === 0) return 'green';
    if ([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(numero)) {
      return 'red';
    }
    return 'black';
  };

  // Función para alternar la selección de un número
  const toggleSeleccion = (numero) => {
    const nuevosSeleccionados = new Set(seleccionados);
    if (nuevosSeleccionados.has(numero)) {
      nuevosSeleccionados.delete(numero);
    } else {
      nuevosSeleccionados.add(numero);
    }
    setSeleccionados(nuevosSeleccionados);
  };

  // Función para seleccionar una combinación
  const seleccionarCombinacion = (combinacion) => {
    const nuevosSeleccionados = new Set(combinacion);
    setSeleccionados(nuevosSeleccionados);
  };

  // Función para animar la pelota
  const animarPelota = (timestamp) => {
    if (velocidadRef.current < 0.6) {
      // Detener la animación cuando la velocidad sea muy baja
      setLanzando(false);
      return;
    }

    // Actualizar el ángulo de la pelota
    anguloRef.current = (anguloRef.current + velocidadRef.current) % 360;

    // Mover la pelota
    if (pelotaRef.current) {
      pelotaRef.current.style.transform = `rotate(${anguloRef.current}deg) translate(150px) rotate(-${anguloRef.current}deg)`;
    }

    // Reducir la velocidad gradualmente
    velocidadRef.current *= 0.99; // Disminución más lenta para más vueltas

    // Solicitar el siguiente frame de animación
    animacionIdRef.current = requestAnimationFrame(animarPelota);
  };

  // Función para lanzar la pelota
  const lanzarPelota = () => {
    if (lanzando) return; // Evitar múltiples lanzamientos simultáneos

    // Reiniciar la animación
    if (animacionIdRef.current) {
      cancelAnimationFrame(animacionIdRef.current);
    }

    // Configurar velocidad inicial aleatoria
    velocidadRef.current = Math.random() * 8 + 5; // Entre 5 y 13 grados por frame
    setLanzando(true);

    // Iniciar la animación
    animacionIdRef.current = requestAnimationFrame(animarPelota);
  };

  // Función para reiniciar la pelota
  const reiniciarPelota = () => {
    if (animacionIdRef.current) {
      cancelAnimationFrame(animacionIdRef.current);
    }

    // Reiniciar la posición y velocidad de la pelota
    anguloRef.current = 0;
    velocidadRef.current = 0;
    setLanzando(false);

    // Mover la pelota a la posición inicial
    if (pelotaRef.current) {
      pelotaRef.current.style.transform = `rotate(0deg) translate(150px) rotate(0deg)`;
    }
  };

  // Limpiar la animación al desmontar el componente
  useEffect(() => {
    return () => {
      if (animacionIdRef.current) {
        cancelAnimationFrame(animacionIdRef.current);
      }
    };
  }, []);

  // Orden de los números en la mesa (vertical)
  const ordenMesa = [
    [0], // Fila especial para el 0
    [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], // Primera columna
    [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], // Segunda columna
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], // Tercera columna
  ];

  return (
    <div className="ruleta-container">
      <h1>Ruleta</h1>

      {/* Botones para seleccionar combinaciones */}
      <div className="combinaciones">
        {Object.keys(combinaciones).map((key) => (
          <button
            key={key}
            className="boton-combinacion"
            onClick={() => seleccionarCombinacion(combinaciones[key])}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Rueda de la ruleta */}
      <div className="ruleta-circular">
        {numerosRuleta.map((numero, index) => {
          const angulo = (360 / numerosRuleta.length) * index;
          const color = getColor(numero);
          const estaSeleccionado = seleccionados.has(numero);

          return (
            <div
              key={index}
              className="numero"
              style={{
                transform: `rotate(${angulo}deg) translate(150px) rotate(-${angulo}deg)`,
                backgroundColor: color,
                boxShadow: estaSeleccionado ? `0 0 10px 5px yellow` : 'none',
                width: '30px',
                height: '30px',
              }}
              onClick={() => toggleSeleccion(numero)}
            >
              {numero}
            </div>
          );
        })}

        {/* Pelota */}
        <div
          ref={pelotaRef}
          className="pelota"
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            transform: 'translate(150px)',
          }}
        ></div>
<p className="counterNumero">
          <span className="counter">({seleccionados.size})</span>
        </p>
        {/* Botón para lanzar la pelota */}
        <button
          className="boton-lanzar"
          onClick={lanzarPelota}
          disabled={lanzando}
        >
          {lanzando ? 'en juego...' : 'Lanzar'}
        </button>

        {/* Botón para reiniciar la pelota */}
        <button
          className="boton-reiniciar"
          onClick={reiniciarPelota}
          disabled={lanzando}
        >
          Restart
        </button>
      </div>

      {/* Números seleccionados */}
      <div className="seleccionados">
        
        <ul>
          {Array.from(seleccionados).map((numero) => (
            <li
              key={numero}
              style={{ backgroundColor: getColor(numero) }}
            >
              {numero}
            </li>
          ))}
        </ul>
      </div>

      {/* Mesa de ruleta */}
      <div className="mesa-ruleta">
        <h2>Mesa de Ruleta</h2>
        <div className="mesa-container">
          {/* Fila para el 0 */}
          <div className="fila-mesa">
            <div
              className="numero-mesa"
              style={{
                backgroundColor: getColor(0),
                boxShadow: seleccionados.has(0) ? `0 0 15px 5px yellow` : 'none',
                opacity: seleccionados.has(0) ? 1 : 0.4,
              }}
              onClick={() => toggleSeleccion(0)}
            >
              0
            </div>
          </div>

          {/* Números del 1 al 36 */}
          <div className="columnas-mesa">
            {ordenMesa.slice(1).map((columna, colIndex) => (
              <div key={colIndex} className="columna-mesa">
                {columna.map((numero) => {
                  const estaSeleccionado = seleccionados.has(numero);
                  const color = getColor(numero);
                  const colorApagado = estaSeleccionado ? color : `rgba(${color === 'red' ? '128, 0, 0' : '0, 0, 0'}, 0.5)`;

                  return (
                    <div
                      key={numero}
                      className="numero-mesa"
                      style={{
                        backgroundColor: colorApagado,
                        boxShadow: estaSeleccionado ? `0 0 15px 5px yellow` : 'none',
                        opacity: estaSeleccionado ? 1 : 0.4,
                      }}
                      onClick={() => toggleSeleccion(numero)}
                    >
                      {numero}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .counterNumero {
          position: absolute;
          top: 2.4rem;
          bottom: 0;
          color: white;
          font-size: 30px;
        }

        .ruleta-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .combinaciones {
  display: flex;
  flex-wrap: wrap; /* Permite que los botones se envuelvan en varias filas */
  gap: 10px;
  margin-bottom: 20px;
}

.boton-combinacion {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  flex: 1 1 calc(25% - 10px); /* Ajusta el ancho para 4 botones por fila */
  box-sizing: border-box; /* Incluye el padding en el cálculo del ancho */
  text-align: center;
}

.boton-combinacion:hover {
  background-color: #5a6268;
}

        .ruleta-circular {
          position: relative;
          width: 350px;
          height: 350px;
          border: 5px solid #333;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .numero {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }

        .numero:hover {
          box-shadow: 0 0 10px 3px rgba(255, 255, 0, 0.7);
        }

        .pelota {
          transition: transform 0.1s linear;
        }

        .boton-lanzar {
          position: absolute;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
        }

        .boton-lanzar:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .boton-reiniciar {
          bottom: 90px;
          position: absolute;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
        }

        .boton-reiniciar:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .seleccionados {
          margin-top: 20px;
          text-align: center;
        }

        .seleccionados ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .seleccionados li {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          color: white;
        }

        .mesa-ruleta {
          margin-top: 0px;
          text-align: center;
        }

        .mesa-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0px;
        }

        .fila-mesa {
          display: flex;
          justify-content: center;
        }

        .columnas-mesa {
          display: flex;
          gap: 10px;
        }

        .columna-mesa {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .numero-mesa {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 5px;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .numero-mesa:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}