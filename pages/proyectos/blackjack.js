import { useState } from 'react';

export default function Blackjack() {
  // Generar una baraja de 6 mazos de 52 cartas
  const generarBaraja = () => {
    const palos = ['c', 'd', 't', 'p']; // Corazones, Diamantes, Tréboles, Picas
    const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const baraja = [];

    for (let i = 0; i < 6; i++) {
      // 6 mazos
      for (let palo of palos) {
        for (let valor of valores) {
          baraja.push(`${valor}${palo}`); // Ejemplo: "Ac" (As de corazones)
        }
      }
    }

    return baraja;
  };

  // Barajar la baraja
  const barajarBaraja = (baraja) => {
    for (let i = baraja.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
    return baraja;
  };

  // Calcular el valor de una mano
  const calcularValorMano = (mano) => {
    let valor = 0;
    let ases = 0;

    for (let carta of mano) {
      const valorCarta = carta.slice(0, -1); // Extraer el valor (sin el palo)
      if (['J', 'Q', 'K'].includes(valorCarta)) {
        valor += 10;
      } else if (valorCarta === 'A') {
        valor += 11;
        ases += 1;
      } else {
        valor += parseInt(valorCarta);
      }
    }

    // Ajustar el valor si hay ases y el total es mayor a 21
    while (valor > 21 && ases > 0) {
      valor -= 10;
      ases -= 1;
    }

    return valor;
  };

  // Estado del juego
  const [baraja, setBaraja] = useState(barajarBaraja(generarBaraja()));
  const [manoJugador, setManoJugador] = useState([]);
  const [manoCrupier, setManoCrupier] = useState([]);
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // Repartir cartas iniciales
  const repartirCartasIniciales = () => {
    const nuevaBaraja = [...baraja];
    const manoJugador = [nuevaBaraja.pop(), nuevaBaraja.pop()];
    const manoCrupier = [nuevaBaraja.pop(), nuevaBaraja.pop()];

    setBaraja(nuevaBaraja);
    setManoJugador(manoJugador);
    setManoCrupier(manoCrupier);
    setJuegoTerminado(false);
    setMensaje('');
  };

  // Pedir carta (Hit)
  const pedirCarta = () => {
    if (juegoTerminado) return;

    const nuevaBaraja = [...baraja];
    const nuevaCarta = nuevaBaraja.pop();
    const nuevaManoJugador = [...manoJugador, nuevaCarta];

    setBaraja(nuevaBaraja);
    setManoJugador(nuevaManoJugador);

    // Verificar si el jugador se pasa de 21
    if (calcularValorMano(nuevaManoJugador) > 21) {
      setJuegoTerminado(true);
      setMensaje('¡Te pasaste de 21! Perdiste.');
    }
  };

  // Plantarse (Stand)
  const plantarse = () => {
    if (juegoTerminado) return;

    let nuevaManoCrupier = [...manoCrupier];
    let nuevaBaraja = [...baraja];

    // El crupier pide cartas hasta alcanzar al menos 17
    while (calcularValorMano(nuevaManoCrupier) < 17) {
      nuevaManoCrupier.push(nuevaBaraja.pop());
    }

    setManoCrupier(nuevaManoCrupier);
    setBaraja(nuevaBaraja);
    setJuegoTerminado(true);

    // Determinar el resultado del juego
    const valorJugador = calcularValorMano(manoJugador);
    const valorCrupier = calcularValorMano(nuevaManoCrupier);

    if (valorCrupier > 21 || valorJugador > valorCrupier) {
      setMensaje('¡Ganaste!');
    } else if (valorJugador === valorCrupier) {
      setMensaje('Empate.');
    } else {
      setMensaje('Perdiste.');
    }
  };

  // Reiniciar el juego
  const reiniciarJuego = () => {
    setBaraja(barajarBaraja(generarBaraja()));
    setManoJugador([]);
    setManoCrupier([]);
    setJuegoTerminado(false);
    setMensaje('');
  };

  return (
    <div className="blackjack-container">
      <h1>Blackjack (21)</h1>

      {/* Mesa de juego */}
      <div className="mesa">
        <div className="mano-crupier">
          <h2>Crupier</h2>
          <div className="cartas">
            {manoCrupier.map((carta, index) => (
              <div key={index} className="carta">
                {carta}
              </div>
            ))}
          </div>
          <p>Valor: {calcularValorMano(manoCrupier)}</p>
        </div>

        <div className="mano-jugador">
          <h2>Jugador</h2>
          <div className="cartas">
            {manoJugador.map((carta, index) => (
              <div key={index} className="carta">
                {carta}
              </div>
            ))}
          </div>
          <p>Valor: {calcularValorMano(manoJugador)}</p>
        </div>
      </div>

      {/* Mensaje del juego */}
      {mensaje && <div className="mensaje">{mensaje}</div>}

      {/* Botones de acción */}
      <div className="botones">
        <button onClick={repartirCartasIniciales} disabled={manoJugador.length > 0 && !juegoTerminado}>
          Repartir
        </button>
        <button onClick={pedirCarta} disabled={juegoTerminado || manoJugador.length === 0}>
          Pedir carta
        </button>
        <button onClick={plantarse} disabled={juegoTerminado || manoJugador.length === 0}>
          Plantarse
        </button>
        <button onClick={reiniciarJuego}>Reiniciar</button>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .blackjack-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .mesa {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-bottom: 20px;
        }

        .mano-crupier,
        .mano-jugador {
          text-align: center;
        }

        .cartas {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }

        .carta {
          color:black;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }

        .mensaje {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .botones {
          display: flex;
          gap: 10px;
        }

        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}