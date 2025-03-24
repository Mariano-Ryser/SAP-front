
import { useEffect, useCallback, useRef } from 'react';
import Skeleton from '../components/Skeleton';
import useNotiData from '../hooks/useNotiData';

export default function Home({ limit = 5 }) {
  const { data: notis, loading, likeItem, loadMore, hasMore } = useNotiData('notis', limit);
  const observer = useRef<IntersectionObserver | null>(null);


  // Observador para el último elemento
  const lastNotiElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadMore]);

  return ( 
    <>
      <div className="notis-container">
        {notis.map((noti, index) => (
          <div 
            key={noti._id} 
            className="notiBox"
            ref={index === notis.length - 1 ? lastNotiElementRef : null}
          >
            <h1 className="titulo">{noti.titulo}</h1>
            <p className="text">{noti.text}</p>
            <button 
              className="likeButton" 
              onClick={() => likeItem(noti._id)}
            >
              ❤️{noti.likes}
            </button>
          </div>
        ))}
        
        {loading && (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="notiBox">
              <Skeleton width="100%" height="10rem" />
            </div>
          ))
        )}
      </div>


      {/* Estilos */}
      <style jsx>{`
        .presentacion {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(5, 5, 5, 0.55), rgba(207, 207, 207, 0.29));
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
          color: rgb(255, 251, 0);
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
          background: linear-gradient(135deg, rgba(243, 239, 20, 0.88), rgba(255, 251, 38, 0.57));
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
          background: linear-gradient(135deg, rgba(5, 5, 5, 0.27), rgba(207, 207, 207, 0.21));
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