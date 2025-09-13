import { useState, useEffect, useRef } from "react";

// Dataset 1: Abecedario hebreo
const hebrewLetters = [
  { hebreo: "א", nombre: "Álef", numero: 1, significado: "Unidad, lo divino, el origen" },
  { hebreo: "ב", nombre: "Bet", numero: 2, significado: "Casa, dualidad, receptividad" },
  { hebreo: "ג", nombre: "Guímel", numero: 3, significado: "Abundancia, generosidad, dar y recibir" },
  { hebreo: "ד", nombre: "Dálet", numero: 4, significado: "Puerta, humildad, apertura" },
  { hebreo: "ה", nombre: "Hei", numero: 5, significado: "Revelación, aliento divino, vida" },
  { hebreo: "ו", nombre: "Vav", numero: 6, significado: "Conexión, unión, vínculo" },
  { hebreo: "ז", nombre: "Zain", numero: 7, significado: "Lucha, espada, energía espiritual" },
  { hebreo: "ח", nombre: "Jet", numero: 8, significado: "Vida, trascendencia, gracia" },
  { hebreo: "ט", nombre: "Tet", numero: 9, significado: "Bondad escondida, potencial interno" },
  { hebreo: "י", nombre: "Yod", numero: 10, significado: "Semilla, chispa divina, principio" },
  { hebreo: "כ", nombre: "Kaf", numero: 20, significado: "Palma, contenedor, poder de dar forma" },
  { hebreo: "ל", nombre: "Lámed", numero: 30, significado: "Aprendizaje, enseñanza, aspiración" },
  { hebreo: "מ", nombre: "Mem", numero: 40, significado: "Agua, fluidez, sabiduría oculta" },
  { hebreo: "נ", nombre: "Nun", numero: 50, significado: "Fecundidad, humildad, continuidad" },
  { hebreo: "ס", nombre: "Sámej", numero: 60, significado: "Soporte, protección, círculo" },
  { hebreo: "ע", nombre: "Áyin", numero: 70, significado: "Ojo, visión interior, percepción" },
  { hebreo: "פ", nombre: "Péi", numero: 80, significado: "Boca, expresión, comunicación" },
  { hebreo: "צ", nombre: "Tsadí", numero: 90, significado: "Justicia, rectitud, humildad" },
  { hebreo: "ק", nombre: "Kuf", numero: 100, significado: "Santidad, paradoja, trascender lo material" },
  { hebreo: "ר", nombre: "Résh", numero: 200, significado: "Cabeza, inicio, pobreza espiritual" },
  { hebreo: "ש", nombre: "Shin", numero: 300, significado: "Fuego, transformación, lo divino manifestado" },
  { hebreo: "ת", nombre: "Tav", numero: 400, significado: "Sello, completitud, verdad final" }
];



// Dataset 2: Nombres de Dios
const palabrasDeDios = [

  {
     // n1
    hebreo: "והו",
    significado: "Viaje en el tiempo",
    oracion:
      "Despierto la comprensión en mi corazón por anteriores malas acciones. Acepto la franca verdad espiritual de que los problemas en mi vida son el resultado de mis acciones pasadas. Concentrándome en este Nombre ahora, desentierro las semillas negativas que he plantado y, haciendo esto, transformo mi pasado, doy nueva forma a mi presente y creo un futuro lleno de alegría y realización."
  },
  {
     // n2
    hebreo: "ילי",
    significado: "Recapturando la chispa",
    oracion:
      "Fragmentos de luz son sacados de las entidades destructivas que residen dentro de mí. Su fuerza de vida es cortada y soy reaprovisionado(a) con Energía Divina. La vida crece con más brillo todos y cada uno de los días, ¡como si billones de chispas sagradas retornasen a mi alma!"
  },
   {
     // n3
    hebreo: "סיט",
    significado: "Haciendo milagros",
    oracion:
      "Me libero de todo egoismo, envidia, ira, y autocompasion. A través de este Nombre, me convierto en un canal puro para que la energía milagrosa de Dios fluya a través del rechazo de estas tentaciones negativas, soy libre para invocar este Nombre y encender de este modo el poder de los milagros en mi vida."
  },
   {
     // n4
    hebreo: "עלם",
    significado: "Eliminando pensamientos negativos",
    oracion: "Estoy desconectándome ahora de los pensamientos negativos que emanan de mi ego. En el espacio que he abierto, surge un suave resplandor de Luz espiritual. "
  },

  // n5
  {
    hebreo: "מהש",
    significado: "Curación",
    oracion:
    "El poder de este Nombre trae la energía de la sanación a los niveles más profundos de mi ser, debido a que ahora puedo aceptar toda la responsabilidad por mi condición presente y a que he usado mi energía para concentrarme en otros que también necesitan curación."
  },
  // n6
  {
    hebreo: "ללה",
    significado: "Estado de ensueño",
    oracion: "Con este Nombre soñaré verdaderamente. Mi alma ascenderá a lugares seguros y amorosos durante la noche. Despertaré con más fuerzas cada mañana. Revigorizado. Renovado en cuerpo y alma. Más sabio."
  },
  {
    // n8
  hebreo: "כהת",
    significado: "Desactivar la energia negativa y el estres",
    oracion: "Con su potentísimo poder, te ayudará a purificar y transmutar las energías negativas que te oprimen, reconduciéndote al equilibrio e impregnando todo tu Ser de energía positiva."},
    // n16
    {
    hebreo: "הקם",
    significado: "Deshaciendose de la depresion",
    oracion: "Me ha sido conferida la fortaleza emocional para mantenerme erguida/o después de haber tropezado, para levantarme después de haber caído y para resistir cuando el camino parece intolerable."
  },
   {
     // n20
   hebreo: "פהל",
    significado: "Victoria sobre las adicciones",
    oracion: "Este Nombre garantiza mi victoria sobre las fuerzas del ego. Estoy impregnada/o de la fortaleza emocional y la disciplina necesaria para triunfar sobre mis impulsos egocéntricos. "
  },
   {
     // n21
   hebreo: "נלך",
    significado: "Erradicar la plaga",
    oracion: "Usando este Nombre hago un llamado a la fuerza de la Luz para destruir las plagas de raíz. Pienso en la contaminación, el odio y cualquier otra plaga que infecte el mundo. Ahora invoco la fuerza de la Luz para arrancar estas plagas de raíz.  "
  },
   {
   // n26
   hebreo: "האא",
    significado: "Orden a partir del caos",
    oracion: "Si sientes que necesitas reestructurar tu vida, ya sea a nivel genérico como en algún ámbito concreto, conecta con este Nombre. "
  },
   {
   // n30
   hebreo: "אום",
    significado: "Construyendo Puentes",
    oracion: "Con el poder de este Nombre, extiendo una mano amistosa a las personas con quienes estoy en conflicto, ¡aun si el conflicto es sobre dinero! Despierto la compasión e invoco el coraje para levantar el teléfono y llamar a esa persona justo ahora. ¡Y eso significa ahora mismo! En consecuencia, será construido para mí un puente hacia el Mundo Superior.. "
  },
    {
   // n34
   hebreo: "להח",
    significado: "Olvidarse de si mismo",
    oracion: "Trasciendo ahora los límites de mi propio ser. Me aferro al Árbol de la Vida. La felicidad me descubre ahora que el ego está fuera de mi atención. Puedo apartarme de mi propio camino, dejando ir toda terquedad. . "
  },

  
   {
   // n41
   hebreo: "ההה",
    significado: "Sanación general",
    oracion: "Este Nombre e ayuda a trabajar la conexión con tu parte divina, abriéndote a la sabiduría interior y capacitándote para sanar aquellas heridas que aún están abiertas. "
  },
    {
   // n45
   hebreo: "סאל",
    significado: "El poder de la prosperidad",
    oracion: "Este Nombre es el que nos abre las puertas del Cielo para experimentar la Abundancia Económica. Nos conecta con el sustento y el dinero, abriendo el recipiente para que esto ocurra. Es importante tener en cuenta que la energía de la Prosperidad es el Creador: Él es quien genera toda buena fortuna. Teniendo presente esto, cuando conectes con este Nombre invocarás la energía de la Abundancia para materializar el dinero y el sustento en el Mundo físico. "
  },
     {
   // n51
   hebreo: "סאל",
    significado: "El poder de la prosperidad",
    oracion: "Este Nombre es el que nos abre las puertas del Cielo para experimentar la Abundancia Económica. Nos conecta con el sustento y el dinero, abriendo el recipiente para que esto ocurra. Es importante tener en cuenta que la energía de la Prosperidad es el Creador: Él es quien genera toda buena fortuna. Teniendo presente esto, cuando conectes con este Nombre invocarás la energía de la Abundancia para materializar el dinero y el sustento en el Mundo físico. "
  },
];

export default function Kabala() {
  const [selected, setSelected] = useState(null);
  const [modo, setModo] = useState("abecedario"); // "abecedario" | "nombres" | "matrix"
  const canvasRef = useRef(null);

  // 🎥 Matrix effect
  useEffect(() => {
    if (modo !== "matrix") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 28;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 255, 0, 0.99)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = hebrewLetters[Math.floor(Math.random() * hebrewLetters.length)].hebreo;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, [modo]);

  // Dataset activo
  const data = modo === "abecedario" ? hebrewLetters : palabrasDeDios;

  return (
    <div className="container">
      {/* 🔀 Switcher */}
      <div className="switcher">
        <button onClick={() => { setModo("abecedario"); setSelected(null); }}>Letras </button>
        <button onClick={() => { setModo("nombres"); setSelected(null); }}>72 Nombres</button>
        <button onClick={() => { setModo("matrix"); setSelected(null); }}>Matrix</button>
      </div>

      {/* Render según modo */}
    {modo === "matrix" ? (
  <>
    <canvas ref={canvasRef} className="matrixCanvas"></canvas>
    <button className="exitMatrix" onClick={() => setModo("abecedario")}>
      Salir de Matrix
    </button>
  </>
) : selected === null ? (
  <div className="grid">
    {data.map((item, i) => (
      <div key={i} className="card" onClick={() => setSelected(item)}>
        <h1>{item.hebreo}</h1>
        <p className="significado">{item.significado}</p>
      </div>
    ))}
  </div>
) :  (
        <div className="fullscreen" onClick={() => setSelected(null)}>
          <div className="content">
            <div className="letter">{selected.hebreo}</div>

            {modo === "abecedario" && (
              <>
                <p>{selected.nombre} ({selected.numero})</p>
                <p>{selected.significado}</p>
              </>
            )}

            {modo === "nombres" && (
              <>
                <h2>{selected.significado}</h2>
                <p>{selected.oracion}</p>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .significado {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: #ccc;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background: black;
          padding: 2rem;
        }
       .switcher {
  gap: 1rem; /* separación entre ellos */
  margin-bottom: 1rem;
  flex-wrap: wrap; /* para que no se rompan en pantallas muy pequeñas */
  position: sticky; /* opcional: que se quede arriba al hacer scroll */
  top: 1rem;
  z-index: 0;
}

.switcher button {
  background: #4a1b50ff;
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  margin: 0.2rem;
  border-radius: 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.switcher button:hover {
  background: #24243e;
}
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 900px;
        }
        .card {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          border-radius: 1.2rem;
          padding: 2rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        .card:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(255,255,255,0.5);
        }
        .fullscreen {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(270deg, #0f0c29, #302b63, #24243e);
          background-size: 600% 600%;
          animation: gradientShift 10s ease infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 2rem;
        }
        .content {
          max-width: 800px;
          text-align: center;
          color: white;
        }
        .letter {
          font-size: clamp(6rem, 20vw, 12rem);
          text-shadow: 0 0 40px rgba(255,255,255,0.8);
          animation: float 4s ease-in-out infinite;
          margin-bottom: 1rem;
        }
        h1 {
          font-size: 4rem;
          margin: 0;
        }
        h2 {
             font-size: clamp(6rem, 20vw, 12rem);
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.6;
        }
      .matrixCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 110vw;
  height: 100vh;
  background: black;
  z-index: 9999; /* delante de todo */
}

.exitMatrix {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem 1.5rem;
  font-size: 0.5rem;
  border-radius: 0.8rem;
  border: none;
  background: #4a1b505b;
  color: #805286af;
  cursor: pointer;
  z-index: 10000; /* sobre el canvas */
  transition: background 0.3s ease;
}
.exitMatrix:hover {
  background: #24243e;
}
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }


@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem; /* un poquito menos de separación */
  }

  .card {
    padding: 1rem; /* achicar las cartas */
    font-size: 1.8rem; /* letra más pequeña */
  }


 .switcher button {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
  p {
    font-size: 0.9rem; /* texto más pequeño en las cartas */
  }
}
    /* Ajustes para tablet/media intermedia */
@media (min-width: 601px) and (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .card {
    padding: 1.5rem;
    font-size: 2rem;
  }

}
@media (min-width: 901px) {
  .grid {
    grid-template-columns: repeat(6, 1fr); /* máximo 6 cartas por fila */
    gap: 2.5rem; /* más separación */
    max-width: 1400px; /* que no se estire demasiado */
  }

  .card {
    padding: 2rem;
    font-size: 2.5rem;
  }
}
      `}</style>
    </div>
  );
}
