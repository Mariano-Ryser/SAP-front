import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../components/auth/AuthProvider';
import NoticiasUploader from './noticiasUploader';

export default function Noticia() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const { isAuthenticated } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Función para cargar noticias
  const fetchNoticias = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/noticias`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al obtener noticias');
      }
      
      setNoticias(data.noticias || data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Cargar noticias al montar el componente
  useEffect(() => {
    fetchNoticias();
  }, []);

  const handleSubmitNoticia = async (formData) => {
    try {
      const response = await fetch(`${baseURL}/noticias`, {
        method: 'POST',
        body: formData // FormData ya incluye todos los campos
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        const errorMessage = data.message || data.error || 
                           (typeof data === 'string' ? data : 'Error al crear la noticia');
        throw new Error(errorMessage);
      }
  
      setSuccessMessage('Noticia creada exitosamente!');
      setShowModal(false);
      await fetchNoticias();
      setTimeout(() => setSuccessMessage(''), 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Hubo un error al crear la noticia');
      setTimeout(() => setError(''), 3000);
    }
  };
  
  const eliminarNoticia = async (id) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta noticia?')) {
      return;
    }

    try {
      const response = await fetch(`${baseURL}/noticias/${id}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();  
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al eliminar noticia');
      }

      setSuccessMessage('Noticia eliminada con éxito!');
      await fetchNoticias(); // Recargar noticias
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Error al eliminar noticia');
      setTimeout(() => setError(''), 3000);
    }
  };

  if (loading) {
    return <div className="loading">Cargando noticias...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <>
     {/* Mensajes de feedback */}
     {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      {isAuthenticated && (
        <button 
          className='uploader-noticias-button'
          onClick={() => setShowModal(true)}
        >
          <span className="l">+</span>
        </button>
      )}

      {showModal && (
        <NoticiasUploader 
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitNoticia}
        />
      )}

      <div className="container-noticias">
        {noticias.length > 0 ? (
          noticias.map((noticia) => (
            <article key={noticia._id} className="noticia">
              <header>
              {isAuthenticated && (
              <button 
                className="eliminar-noticia-button"
                onClick={() => eliminarNoticia(noticia._id)}
              >
                <span className="eliminar-icon">×</span>
              </button>
            )}
                <h1 className="titulo">{noticia.titulo}</h1>
                <div className="meta-info">
                  <span className="autor">Por: {noticia.autor}</span>
                  <span className="fecha">Publicado: {noticia.fecha}</span>
                  <span className="hora">{noticia.hora}</span>
                </div>
                <p className="descripcion">{noticia.descripcion}</p>
              </header>
              
              {noticia.imagen && (
                <div className="imagen-container">
                  <img 
                    src={noticia.imagen} 
                    alt={noticia.titulo}
                    className="imagen-noticia"
                  />
                  <p className="pie-imagen">Fuente: {noticia.fuente}</p>
                </div>
              )}
              
              <div className="contenido-noticia">
                {noticia.secciones?.map((seccion, index) => (
                  <div key={index}>
                    {seccion.subtitulo && <h2 className="subtitulo">{seccion.subtitulo}</h2>}
                    {seccion.contenido && <p>{seccion.contenido}</p>}
                  </div>
                ))}
              </div>

              
              <footer className="noticia-footer">
                <p className="fuente">Fuente: {noticia.fuente}</p>
                <p className="actualizacion">Última actualización: {noticia.actualizacion}</p>
               
              </footer>
              
            </article>
          ))
        ) : (
          <p>No hay noticias disponibles</p>
        )}
      </div>
      
      <style jsx>{`
        .container-noticias {
          height: auto;
          max-width: 800px;
          margin: 1rem auto;
          display: grid;
          gap: 1.5rem;
          padding: 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
        }
        
        .noticia {
          display: grid;
          gap: 1.2rem;
        }
        
        .titulo {
          font-size: 2.8rem;
          margin-bottom: 0.5rem;
        }
        
        .meta-info {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .descripcion {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        
        .imagen-noticia {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.3s;
        }
        
        .pie-imagen {
          font-size: 0.8rem;
          text-align: center;
          margin-top: 0.5rem;
        }
        
        .contenido-noticia {
          display: grid;
          gap: 1rem;
        }
        
        .contenido-noticia p {
          margin: 0;
        }
        
        .subtitulo {
          font-size: 1.6rem;
          margin-top: 1.3rem;
          margin-bottom: 0.5rem;
        }
        
        .noticia-footer {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
          font-size: 0.85rem;
        }
        
        .fuente {
          font-style: italic;
        }
        .uploader-noticias-button {
          font-size: 1.5rem;
          z-index: 2;
          position: fixed;
          right: 20px;
          background-color: rgba(17, 211, 10, 0.58);
          border-radius: 50%;
          height: 40px;
          width: 40px;
          border: 1px solid rgba(250, 235, 215, 0);
          transition: all 0.1s ease;
          color: white;
        }
        .uploader-noticias-button:hover{
            background-color: rgb(17, 211, 10);
        }
        .eliminar-noticia-button {
          position: relative;
        
          background-color: rgba(211, 17, 10, 0.58);
          border-radius: 50%;
          height: 30px;
          width: 30px;
          border: none;
          color: white;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .eliminar-noticia-button:hover {
          background-color: rgb(211, 17, 10);
          transform: scale(1.1);
        }
        .success-message {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #4CAF50;
          color: white;
          padding: 15px;
          border-radius: 4px;
          z-index: 1000;
          animation: fadeInOut 3s ease-in-out;
        }
        
        .error-message {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #f44336;
          color: white;
          padding: 15px;
          border-radius: 4px;
          z-index: 1000;
          animation: fadeInOut 3s ease-in-out;
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .container-noticias {
            padding: 0.5rem;
          }
          
          .titulo {
            font-size: 1.5rem;
          }
          
          .meta-info {
            flex-direction: column;
            gap: 0.3rem;
          }
          
          .descripcion {
            font-size: 1rem;
          }
          
          .subtitulo {
            font-size: 1.2rem;
          }
          
          .uploader-noticias-button {
            right: 10px;
            top: auto;
          }
        }
      `}</style>
      </>
      );
    }

