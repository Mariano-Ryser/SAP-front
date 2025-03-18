import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader';


export default function Home() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [images, setImages] = useState([]);

  //Abrir modal fotos
  const [modalOpen, setModalOpen] = useState(false);
    // Obtener imágenes desde el backend
   const fetchImages = async () => {
        try {
          const response = await fetch(`${baseURL}/images`);
          const data = await response.json();
          setImages(data.images);
        } catch (error) {
          console.error('Error al obtener imágenes:', error);
        }
      };
      const handleLike = async (id) => {
        await fetch(`${baseURL}/images/${id}/like`, { method: 'POST' });
        fetchImages(); // Refresca la galería con el nuevo conteo de likes
      };
      
      const handleComment = async (e, id) => {
        e.preventDefault();
        const text = e.target.comment.value;
        if (!text) return;
        await fetch(`${baseURL}/images/${id}/comment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text })
        });
        e.target.reset();
        fetchImages(); // Recarga los comentarios
      };
      const handleLikeComment = async (imageId, commentId) => {
        try {
          const response = await fetch(`${baseURL}/images/${imageId}/comment/${commentId}/like`, {
            method: 'POST',
          });
      
          if (response.ok) {
            // Actualiza los likes localmente (puedes hacerlo más pro con state management)
            setImages(prevImages => 
              prevImages.map(img => {
                if (img._id === imageId) {
                  return {
                    ...img,
                    comments: img.comments.map(comm => 
                      comm._id === commentId ? { ...comm, likes: (comm.likes || 0) + 1 } : comm
                    )
                  };
                }
                return img;
              })
            );
          }
        } catch (err) {
          console.error('Error al likear comentario:', err);
        }
      };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container">
      <h1>Galería de Imágenes</h1>


      <ImageUploader
       onUpload={(uploadedImageUrl) => {
      const newImage = { imageUrl: uploadedImageUrl };
      setImages(prev => [newImage, ...prev]);
      }} />



  <div className="image-grid">
  {images && images.length > 0 ? (
    images.map((image, index) => (
      <div key={index} className="image-container" onClick={() => setModalOpen(true)}>
         <img
                src={`${image.imageUrl.replace('/upload/', '/upload/c_fill,w_500,h_600/')}`}
                alt={`Imagen ${index}`}
                className="image"
              />
      </div>
    ))
  ) : (
    <p>No hay imágenes disponibles</p> // Mostrar un mensaje si no hay imágenes
  )}
</div>
{modalOpen && (
  <div className="modal-overlay" onClick={() => setModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

      {/* 🔥 FLECHA PARA VOLVER */}
      <div className="close-arrow" onClick={() => setModalOpen(false)}>
        ⬅
      </div>


{/* MAPEO DE IMAGENES */}
{images.map((image, idx) => (
  <div key={idx} className="image-post">
    <img 
      src={`${image.imageUrl.replace('/upload/', '/upload/c_fill,w_500,h_600/')}`} 
      className="modal-image" 
    />
    <div className="caja-like-coments">
      {/* Botón de like para la imagen */}
      <button onClick={() => handleLike(image._id)} className="like-button-img">
        👍 {image.likes || 0}
      </button>

      {/* Formulario de comentarios */}
      <form onSubmit={(e) => handleComment(e, image._id)} className="comment-form">
        <input type="text" name="comment" placeholder="Agrega un comentario..." />
        <button type="submit">Comentar</button>
      </form>

      {/* Mostrar solo los últimos 3 comentarios de la imagen */}
      <div className="comments">
        {image.comments && image.comments.slice(-3).map((c, i) => (
          <div key={i} className="comment">
            <div className="comment-content">
              <p>- {c.text}</p>
              {/* Botón de like para cada comentario */}
              <button 
                className="like-button" 
                onClick={() => handleLikeComment(image._id, c._id)}
              >
                🩶 {c.likes || 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))}

    </div>
  </div>
)}


<style jsx>{`
  .like-button-img {
    padding-left: 1rem;
    background: none;
    border: none;
    color: rgba(224, 224, 224, 0.8);
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .like-button-img:hover {
    transform: scale(1.05);
  }
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    transition: opacity 0.3s ease;
  }
  .modal-content {
    background: #1e1e1e;
    padding: 0px;
    max-height: 100vh;
    overflow-y: auto;
    width: 100%;
    max-width: 56rem;
    position: relative;
    animation: fadeIn 0.3s ease;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px) translateX(-100%); }
    to { opacity: 1; transform: translateY(0)translateX(0%);; }
  }
  .close-arrow {
    position: fixed;
    top: 30px;
    right: 30px;
    font-size: 2rem;
    cursor: pointer;
    color: #ccc;
    background: rgba(0, 0, 0, 0.4);
    padding: 1px 12px;
    border-radius: 50%;
    transition: background 0.3s;
    z-index: 3000;
  }
  .close-arrow:hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
  .image-post {
    margin-bottom: 20px;
  }
  .modal-image {
    width: 100%;
  }
  .like-button {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .like-button:hover {
    transform: scale(1.1);
  }
  .comment-form {
    padding-left: 10px;
    margin-top: 5px;
    display: flex;
    gap: 10px;
  }
  .comment-form input {
    flex: 1;
    background: none;
    color: white;
    padding: 8px;
    border: none;
  }
  .comment-form input::placeholder {
    color: rgba(199, 202, 204, 0.68);
    opacity: 1; /* Firefox */
  }
  .comment-form button {
    padding: 8px 16px;
    background-color: rgba(178, 184, 189, 0.68);
    color: white;
    border: none;
    border-radius: 5px;
  }
  .comments {
    padding-left: 10px;
    border-radius: 5px;
    margin-top: 10px;
  }
  .comment {
    margin-bottom: 10px;
  }
  .comment-content {
    border:solid 1px rgba(178, 184, 189, 0);
    
    flex: 1; /* Ocupa todo el espacio disponible */
    margin-right: 10px; /* Espacio entre el texto y el botón de like */
    margin-bottom:5px;
    display: flex;
    padding:0.03rem;
    border-radius:4px;
    
  }
  .comment p {
    
    color: #ddd;
    margin: 0;
    font-size: 0.9rem;
  }
  .comment-actions {
    display: flex;
    align-items: center; /* Alinea el botón de like verticalmente */
    justify-content: flex-end; /* Alinea el botón de like a la derecha */
    margin-top: 5px;
    width: 5rem;
  }
  .like-button {
    position:absolute;
    right:2rem;
  background: none;
  border: none;
  color:rgb(206, 206, 206);
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 0; /* Elimina el padding para mejor alineación */
}
  .like-button:hover {
    transform: scale(1.2);
  }
  .upload-container {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .upload-container input {
    margin-bottom: 10px;
  }
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin-top: 20px;
  }
  .image-container {
    border-radius: 10px;
    overflow: hidden;
  }
  .image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }
`}</style>
    </div>
  );
}