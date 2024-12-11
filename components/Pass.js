import { useState } from "react";

export default function AuthModal() {
  const [inputValue, setInputValue] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
    if (inputValue === secretKey) {
      setIsAuthenticated(true); // Autenticar y cerrar modal
    } else {
      alert("Clave incorrecta");
    }
  };

  if (isAuthenticated) {
    return null; // Modal desaparece
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Ingrese la clave para acceder</h2>
        <input
          type="password"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Clave"
        />
        <button onClick={handleSubmit}>Ingresar</button>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .modal {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
          width: 90%;
        }
        h2 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        input {
            color:black;
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        button:hover {
          background: #005bb5;
        }
      `}</style>
    </div>
  );
}