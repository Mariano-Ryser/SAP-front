import { useState } from "react";

export default function CyberWordFinder() {
  const [input, setInput] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
  const fetchWords = async () => {
    if (!input) return;
    setLoading(true);
    try {
        const response = await fetch(`${baseURL}/palabras/buscar?letras=${input}`);
      const data = await response.json();
      setFoundWords(data.palabras || []);
    } catch (error) {
      console.error("Error al buscar palabras:", error);
      setFoundWords([]);
    }
    setLoading(false);
  };

  return (
    <div className="cyber-word-generator">
      <h1 className="cyber-title">🔹 CyberWord Finder 🔹</h1>

      <div className="cyber-input-container">
        <input
          type="text"
          placeholder="Escribe letras aquí..."
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          className="cyber-input"
        />
        <button onClick={fetchWords} className="cyber-button">
          🔍 Buscar
        </button>
      </div>

      {loading ? (
        <div className="cyber-loading">
          <div className="cyber-loading-bar"></div>
          <p>Buscando...</p>
        </div>
      ) : (
        <div className="cyber-results">
          <div className="cyber-stats">
            <span>🔠 Letras ingresadas: {input || "Ninguna"}</span>
            <span>📄 Palabras encontradas: {foundWords.length}</span>
          </div>

          <div className="cyber-words-grid">
            {foundWords.length > 0 ? (
              foundWords.map((word, index) => (
                <div key={index} className="cyber-word-card">
                  <span className="cyber-word-length">{word.length}</span>
                  <span className="cyber-word-text">{word}</span>
                </div>
              ))
            ) : (
              <p className="cyber-no-results"> No se encontraron palabras</p>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        :root {
          --neon-blue: rgba(10, 175, 255, 0.8);
          --neon-pink: rgba(255, 10, 175, 0.8);
          --neon-green: rgba(0, 255, 100, 0.8);
          --cyber-dark: rgba(10, 15, 25, 0.95);
          --cyber-border: 1px solid rgba(10, 175, 255, 0.3);
          --cyber-glow: 0 0 15px rgba(10, 175, 255, 0.5);
        }

        .cyber-word-generator {
          max-width: 800px;
          margin: auto;
          padding: 2rem;
          background: var(--cyber-dark);
          border-radius: 10px;
          font-family: "Courier New", monospace;
          text-align: center;
          color: white;
          box-shadow: 0px 0px 20px var(--neon-blue);
        }

        .cyber-title {
          font-size: 1.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--neon-pink);
          text-shadow: 0 0 8px var(--neon-pink);
        }

        .cyber-input-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .cyber-input {
          flex: 1;
          padding: 0.8rem;
          background: rgba(0, 10, 20, 0.7);
          border: var(--cyber-border);
          border-radius: 5px;
          color: var(--neon-green);
          font-size: 1.2rem;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 2px;
          outline: none;
          transition: all 0.3s ease;
        }

        .cyber-input:focus {
          box-shadow: var(--cyber-glow);
        }

        .cyber-button {
          background: var(--neon-blue);
          border: none;
          padding: 0.8rem 1.2rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: bold;
          text-transform: uppercase;
          transition: 0.3s;
        }

        .cyber-button:hover {
          background: var(--neon-pink);
          box-shadow: 0px 0px 15px var(--neon-pink);
        }

        .cyber-results {
          min-height: 200px;
          background: rgba(20, 25, 35, 0.5);
          border-radius: 5px;
          padding: 1.5rem;
          box-shadow: 0px 0px 10px var(--neon-blue);
        }

        .cyber-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          color: rgba(200, 220, 255, 0.7);
          font-size: 0.9rem;
        }

        .cyber-words-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem; /* AUMENTAMOS EL ESPACIADO */
}

.cyber-word-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.2rem; /* MÁS PADDING PARA MEJOR LECTURA */
  background: rgba(10, 50, 80, 0.3);
  border: var(--cyber-border);
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 1.2rem; /* LETRA MÁS GRANDE */
  text-align: center;
}

.cyber-word-text {
  font-size: 1.4rem; /* MAYOR TAMAÑO PARA PALABRAS GRANDES */
  text-transform: uppercase;
  color: white;
}

.cyber-word-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 10px rgba(10, 175, 255, 0.3);
}

        .cyber-word-length {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10, 175, 255, 0.2);
          border-radius: 50%;
          font-size: 0.8rem;
          color: var(--neon-blue);
        }

        .cyber-word-text {
          font-size: 1rem;
          text-transform: uppercase;
          color: white;
        }

        .cyber-no-results {
          text-align: center;
          color: rgba(255, 50, 50, 0.7);
          padding: 2rem;
          font-size: 1.2rem;
          text-shadow: 0 0 5px red;
        }

        .cyber-loading {
          text-align: center;
          padding: 2rem;
        }

        .cyber-loading-bar {
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--neon-blue), transparent);
          animation: loading 1.5s infinite;
          margin-bottom: 1rem;
        }

        @keyframes loading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}