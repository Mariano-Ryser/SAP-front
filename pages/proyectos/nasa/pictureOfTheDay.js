import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const key = "8xLVJeFKsDEvavrzfS7Zq"
  
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${key}Sdw0A17F3E7JhFnnHHc`
    );
    const data = await res.json();
  
    return {
      props: {
        apod: data,
      },
    };
  }
  

  
  export default function Home({ apod }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    return (
       <div>
      <h1>Astronomy Picture of the Day</h1>
      <h2>{apod.title}</h2>

      {/* Imagen que al hacer clic abrirá el modal */}
      <img
        src={apod.url}
        alt={apod.title}
        style={{ maxWidth: '100%', cursor: 'pointer' }}
        onClick={toggleModal}
      />
      <p>{apod.explanation}</p>
      <p>Date: {apod.date}</p>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={toggleModal}>&times;</span>
            <img
              src={apod.url}
              alt={apod.title}
              className="modal-image"
            />
          </div>
        </div>
      )}

      {/* Estilos CSS para el modal */}
      <style jsx>{`
       .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  padding: 10px;
  border-radius: 10px;
  max-width: 100vw; /* Ocupa todo el ancho de la pantalla */
  max-height: 100vh; /* Ocupa todo el alto de la pantalla */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Mantiene el aspecto original de la imagen */
  border-radius: 10px;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  backdrop-filter: blur(7px);
  cursor: pointer;
  background: black;
  padding: 5px 10px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 100vw; /* Asegura que el modal ocupe todo el ancho en pantallas pequeñas */
    max-height: 100vh; /* Asegura que el modal ocupe todo el alto en pantallas pequeñas */
    padding: 0; /* Elimina el padding en móviles */
    border-radius: 0; /* Sin bordes redondeados en móviles */
    background-color: rgba(255, 255, 255, 0);
  }

  .modal-image {
    width: 100vw; /* Ocupa todo el ancho de la pantalla en móviles */
    height: 47vh; /* Ocupa todo el alto de la pantalla en móviles */
    object-fit: contain; /* Mantiene las proporciones de la imagen sin recortarla */
  }
}
      `}</style>
    </div>
    );
  }