import { useState } from 'react';

export default function ImageUploader({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Función para manejar la carga de la imagen
  const handleUpload = async () => {
    if (!file) {
      alert('Por favor, selecciona una imagen.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Error al subir imagen');

      const data = await response.json();
      onUpload(data.image.imageUrl); // Notificar al padre con la nueva imagen
      setModalOpen(false); // Cerrar el modal después de subir la imagen

    } catch (error) {
      console.error(error);
      alert('Error al subir imagen.');
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Botón flotante con "+" */}
      <div className="floating-button" onClick={openModal}>
        +
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
               {/* Botón de cierre en el modal */}
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </div>
            <div className="upload-container">

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              /> 
              <button onClick={handleUpload} disabled={loading} className="upload-button">
                {loading ? 'Subiendo...' : 'Subir Imagen'}
              </button>

            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Botón flotante */
        .floating-button {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 30px;
          height: 30px;
         
          background: linear-gradient(135deg, rgba(47, 167, 36, 0.81),rgb(55, 209, 17));
          color: rgb(255, 255, 255) ;
          font-size: 36px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          z-index: 1000;
          transition: transform 0.3s;
        }

        .floating-button:hover {
          transform: scale(1.1);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          border: 1px solid rgba(143, 143, 143, 0.23);
          background-color: rgba(24, 24, 24, 0.93);
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          width: 96%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: flex-end;
        }

        .close-button {
          color: white;
          background: none;
          border: none;
          font-size: 30px;
          cursor: pointer;
        }

        /* Estilos del contenedor de la subida */
        .upload-container {
          
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .file-input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 2px solid rgba(143, 143, 143, 0.65);
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          transition:0.2s;
        }
        .file-input:hover{
          border: 2px solid rgba(236, 236, 236, 0.65);
          border-radius: 15px;
        }

        .file-input:focus {
          outline: none;
          border: 2px solid rgba(236, 236, 236, 0.65);
          border-radius: 15px;
        }

        .upload-button {
          padding: 12px 20px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .upload-button:hover {
          background: #3498db;
        }

        .upload-button:disabled {
          background-color:rgb(166, 149, 149);
          cursor: not-allowed;
        }

      `}</style>
    </div>
  );
}