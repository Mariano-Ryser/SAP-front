import { useEffect, useState } from 'react';

export async function getStaticProps() {
    const res = await fetch(
      // `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=4205&api_key=8xLVJeFKsDEvavrzfS7ZqSdw0A17F3E7JhFnnHHc`
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=4102&api_key=8xLVJeFKsDEvavrzfS7ZqSdw0A17F3E7JhFnnHHc`
      // `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-12-01&api_key=8xLVJeFKsDEvavrzfS7ZqSdw0A17F3E7JhFnnHHc`
     

    );
    const data = await res.json();
  
    return {
      props: {
        marsPhotos: data.photos,
      },
    };
  }
  
  export default function Mars({ marsPhotos }) {
    
    const [selectedPhoto, setSelectedPhoto] = useState(null); // Estado para manejar la foto seleccionada

    // Función para abrir el modal con la imagen seleccionada
    const openModal = (photo) => {
      setSelectedPhoto(photo);
    };
  
    // Función para cerrar el modal
    const closeModal = () => {
      setSelectedPhoto(null);
    };
  
    return (
      <div>
        <h1>Mars Rover Photos - Sol 1000</h1>
        <div className="photos-grid">
          {marsPhotos.map((photo) => (
            <div key={photo.id} className="photo-card">
              <img
                src={photo.img_src}
                alt={`Mars Rover ${photo.rover.name}`}
                style={{ maxWidth: '100%', cursor: 'pointer' }}
                onClick={() => openModal(photo)} // Al hacer clic, abre el modal con la imagen
              />
              <p>{photo.rover.name} Rover</p>
              <p>Camera: {photo.camera.full_name}</p>
              <p>Date: {photo.earth_date}</p>
            </div>
          ))}
        </div>
  
        {/* Modal para mostrar la imagen seleccionada */}
        {selectedPhoto && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-modal" onClick={closeModal}>&times;</span>
              <img src={selectedPhoto.img_src} alt="Mars Rover Photo" className="modal-image" />
              <p>{selectedPhoto.rover.name} Rover - {selectedPhoto.camera.full_name}</p>
              <p>Date: {selectedPhoto.earth_date}</p>
            </div>
          </div>
        )}
  
        {/* Estilos CSS */}
        <style jsx>{`
          .photos-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Tres columnas en pantallas grandes */
            gap: 20px;
          }
  
          .photo-card {
            background: #f8f9f5;
            padding: 10px;
            border-radius: 10px;
            text-align: center;
          }
  
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
  
          .modal-content {
            position: relative;
            background: white;
            padding: 20px;
            border-radius: 10px;
            max-width: 90vw;
            max-height: 90vh;
            text-align: center;
          }
  
          .modal-image {
            max-width: 100%;
            max-height: 100%;
            border-radius: 10px;
          }
  
          .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            font-weight: bold;
            color: white;
            cursor: pointer;
            background: black;
            padding: 5px 10px;
            border-radius: 50%;
          }
  
          @media (max-width: 768px) {
            .photos-grid {
              grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
            }
  
            .modal-content {
              max-width: 95vw;
              max-height: 80vh;
              background-color: white;
              color: white;
            }
  
            .modal-image {
              width: 100vw;
              height: auto;
            }
          }
        `}</style>
      </div>
    );
  }