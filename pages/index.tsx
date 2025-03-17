import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [notis, setNotis] = useState([]);

  const fetchNotis = () => {
    fetch(`${baseURL}/notis`)
      .then((res) => res.json())
      .then(({ notis }) => {
        setNotis(notis);
        console.log('notis:', notis);
      });
  };

  const handleLike = async (_id) => {
    try {
      const response = await fetch(`${baseURL}/notis/${_id}/like`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const updatedNoti = await response.json();
        setNotis((prevNotis) =>
          prevNotis.map((noti) => (noti._id === _id ? updatedNoti.noti : noti))
        );
      } else {
        console.error('Error al agregar like:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar like:', error);
    }
  };

  useEffect(() => {
    fetchNotis();
  }, []);

  return (
    <>
      {/* Presentación */}
      <div className="presentacion">
        <div className="foto-container">
          <img
            src="/img/me2.jpg" // Cambia esto por la ruta de tu foto
            alt="Tu nombre"
            className="foto"
          />
        </div>
        <h1 className="nombre">Mariano Ryser</h1>
        <h2 className="profesion">Softwareentwickler</h2>
        <p className="descripcion">
        Ich bin ein leidenschaftlicher Softwareentwickler mit Erfahrung
         in der Erstellung moderner und skalierbarer Webanwendungen.
          Ich bin spezialisiert auf Technologien wie Next.js, Node.js und MongoDB.
           Ich liebe es, Probleme zu lösen und neue Technologien zu lernen,
            um meine Fähigkeiten zu verbessern.
        </p>
        <div className="botones">

          <a href="https://github.com/Mariano-Ryser" target="_blank" rel="noopener noreferrer">
            <button className="boton">GitHub</button>
          </a>
          <a href="https://www.linkedin.com/in/mariano-ryser-073731221/" target="_blank" rel="noopener noreferrer">
            <button className="boton">LinkedIn</button>
          </a>
         
        </div>
      </div>

      {/* Mapeo de notis */}
      <div className="notis-container">
        {notis.map(({ _id, titulo, text, likes }) => (
          <div key={_id} className="notiBox">
            <h1 className="titulo">{titulo}</h1>
            <p className="text">{text}</p>
            <button className="likeButton" onClick={() => handleLike(_id)}>
              ❤️{likes}
            </button>
          </div>
        ))}
      </div>

      {/* Estilos */}
      <style jsx>{`
        .presentacion {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg,rgba(5, 5, 5, 0.55),rgba(207, 207, 207, 0.29));
          color: white;
          border-radius: 10px;
          margin: 2rem auto;
          max-width: 800px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .foto-container {
          width: 150px;
          height: 150px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.22);
        }
        .foto {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .nombre {
          font-size: 2.5rem;
          margin: 0.5rem 0;
          font-family: 'Montserrat', sans-serif;
        }
        .profesion {
          font-size: 1.5rem;
          margin: 0.5rem 0;
          font-family: 'Montserrat', sans-serif;
          color:rgb(255, 251, 0)
        }
        .descripcion {
          font-size: 1.1rem;
          margin: 1rem auto;
          max-width: 600px;
          line-height: 1.6;
          font-family: 'Montserrat', sans-serif;
        }
        .botones {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .boton {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 5px;
          background: linear-gradient(135deg,rgba(243, 239, 20, 0.88),rgba(255, 251, 38, 0.57));
          
          color: #1e3c72;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .boton:hover {
          background-color: #ffc107;
        }
        .notis-container {
          margin: 2rem auto;
          max-width: 800px;
        }
        .likeButton {
          border: 0;
          cursor: pointer;
          transform: scale(1.8);
          margin-top: 1rem;
          margin-bottom: 1rem;
          background: none;
          position: relative;
          bottom: 0px;
          left: 85%;
          transition: transform 0.1s;
        }
        .likeButton:hover {
          transform: scale(2);
        }
        .likeButton:active {
          transform: scale(1.7);
        }
        .titulo {
          font-family: 'Montserrat', sans-serif;
          margin-top: 0.7rem;
          margin-bottom: 1rem;
          line-height: 1;
        }
        .notiBox {
          background: linear-gradient(135deg,rgba(5, 5, 5, 0.27),rgba(207, 207, 207, 0.21));
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .text {
          font-family: 'Montserrat', sans-serif;
          white-space: pre-line;
          line-height: 1.44;
          font-size: 19px;
          margin: auto;
        }
      `}</style>
    </>
  );
}