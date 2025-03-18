import { useEffect, useState } from 'react';
import ImageUploader from '../../components/ImageUploader';


export default function Home() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [images, setImages] = useState([]);

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
      <div key={index} className="image-container">
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



      <style jsx>{`
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