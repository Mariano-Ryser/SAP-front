import { useState, useEffect } from 'react';

// Diccionario de palabras (puedes expandirlo)
const wordDictionary = [
  "GOLPE", "GOLPEO", "LOGO", "PEGO",
  "PEDIR","PARED","PERA","PADRE","IDEA","PIAR","IDEAR","RIA","TIRA","IRA",
  "CITA","CITAR","RICA","TIA","CRIA","CAI",
  "LEO","EGO","GOL","PELO","GEL","POLO","GOLPE","GOLPEO",
  "LOGO","PEGO","JUNGLA","ALGUN","LUNA","NULA","AUN","UNA",
  "PALO","COLA","CALO","LOCA","COL","CAL","CAPO","POCA","OLA","PALCO","COPA",
  "VALE","VALER","VELA","VALLE","VER","ELLA","LLEVAR","LLAVE","VELAR","AVE","REAL","LEAL",
  "SIN","OSO","CONO","COSO","SON","ICONO","OCIO","SONICO","SOCIO",
  "ADIOS","DIOS","OSA","DOS","DIA","SODA","ASI","DIOSA","IDA",
  "MESA","ASA","SANA","MASA","MAS","ESA","AMA","MES","SAN","AMEN","SEMANA","AMENA","ASMA",
  "FACETA","CATA","CAFE","ACA","FEA","AFECTA","AFTA","ACTA",
  "ALOE","HOLA","ANHELO","LONA","HALO","LEON",
  "PON","NATO","TAPON","PAN","NOTA","PATO","TAN","APTO",
  
];

export default function WordGenerator() {
  const [inputLetters, setInputLetters] = useState('');
  const [foundWords, setFoundWords] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Función para encontrar todas las palabras posibles
  const findPossibleWords = (letters) => {
    setIsProcessing(true);
    const results = [];
    
    // Convertimos a mayúsculas y eliminamos espacios
    const cleanLetters = letters.toUpperCase().replace(/\s/g, '');
    
    // Si no hay letras, retornar array vacío
    if (!cleanLetters) {
      setIsProcessing(false);
      return [];
    }

    // Convertimos las letras a un array para manipular
    const lettersArray = cleanLetters.split('');
    
    // Función recursiva para generar combinaciones
    const generateCombinations = (current, remaining) => {
      if (current.length > 0) {
        const currentWord = current.join('');
        if (wordDictionary.includes(currentWord) && !results.includes(currentWord)) {
          results.push(currentWord);
        }
      }

      for (let i = 0; i < remaining.length; i++) {
        const newCurrent = [...current, remaining[i]];
        const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
        generateCombinations(newCurrent, newRemaining);
      }
    };

    generateCombinations([], lettersArray);
    
    // Ordenar por longitud (más largas primero) y luego alfabéticamente
    const sortedResults = results.sort((a, b) => {
      if (b.length !== a.length) {
        return b.length - a.length;
      }
      return a.localeCompare(b);
    });

    setIsProcessing(false);
    return sortedResults;
  };

  // Efecto para buscar palabras cuando cambian las letras
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputLetters) {
        const words = findPossibleWords(inputLetters);
        setFoundWords(words);
      } else {
        setFoundWords([]);
      }
    }, 500); // Debounce para no sobrecargar con cada tecla

    return () => clearTimeout(timer);
  }, [inputLetters]);

  return (
    <div className="cyber-word-generator">
      <div className="cyber-input-container">
        <input
          type="text"
          value={inputLetters}
          onChange={(e) => setInputLetters(e.target.value)}
          placeholder="INGRESA TUS LETRAS..."
          className="cyber-input"
          maxLength={9}
        />
        <div className="cyber-input-border"></div>
      </div>

      <div className="cyber-results">
        {isProcessing ? (
          <div className="cyber-loading">
            <div className="cyber-loading-bar"></div>
            <div>ANALIZANDO COMBINACIONES...</div>
          </div>
        ) : (
          <>
            <div className="cyber-stats">
              {inputLetters && (
                <>
                  <span>LETRAS: {inputLetters.toUpperCase()}</span>
                  <span>PALABRAS ENCONTRADAS: {foundWords.length}</span>
                </>
              )}
            </div>

            <div className="cyber-words-grid">
              {foundWords.length > 0 ? (
                foundWords.map((word, index) => (
                  <div key={index} className="cyber-word-card">
                    <div className="cyber-word-length">{word.length}</div>
                    <div className="cyber-word-text">{word}</div>
                  </div>
                ))
              ) : (
                inputLetters && <div className="cyber-no-results">NO SE ENCONTRARON COMBINACIONES VÁLIDAS</div>
              )}
            </div>
          </>
        )}
      </div>

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
          margin: 0 auto;
          padding: 2rem;
          background: var(--cyber-dark);
          border-radius: 10px;
          font-family: 'Courier New', monospace;
        }
        
        .cyber-input-container {
          position: relative;
          margin-bottom: 2rem;
        }
        
        .cyber-input {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 10, 20, 0.7);
          border: var(--cyber-border);
          border-radius: 5px;
          color: var(--neon-green);
          font-family: 'Courier New', monospace;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          outline: none;
          transition: all 0.3s ease;
        }
        
        .cyber-input:focus {
          box-shadow: var(--cyber-glow);
        }
        
        .cyber-input-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid transparent;
          border-radius: 5px;
          pointer-events: none;
          animation: border-pulse 2s infinite;
        }
        
        @keyframes border-pulse {
          0%, 100% { border-color: rgba(10, 175, 255, 0.1); }
          50% { border-color: rgba(10, 175, 255, 0.5); }
        }
        
        .cyber-results {
          min-height: 300px;
          background: rgba(20, 25, 35, 0.5);
          border-radius: 5px;
          padding: 1.5rem;
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
          gap: 1rem;
        }
        
        .cyber-word-card {
          position: relative;
          padding: 1rem;
          background: rgba(10, 50, 80, 0.3);
          border: var(--cyber-border);
          border-radius: 5px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
          font-size: 1.1rem;
          color: white;
          text-transform: uppercase;
        }
        
        .cyber-no-results {
          text-align: center;
          color: rgba(255, 50, 50, 0.7);
          padding: 2rem;
          grid-column: 1 / -1;
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
        
        @media (max-width: 600px) {
          .cyber-word-generator {
            padding: 1rem;
          }
          
          .cyber-words-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}