import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Books() {
  const [books] = useState([
    {
      title: "JavaScript spanish",
      author: "Marijn Haverbeke",
      description: "Una guía completa para JavaScript moderno.",
      cover: "/img/jsSpanish.png",
      file: "/books/jsSpanish.pdf",
    },
    {
      title: "El juego de la vida y cómo jugarlo",
      author: "Florence Scovel Shinn",
      description: "Un clásico sobre el poder del pensamiento positivo y la manifestación.",
      cover: "/img/eljuegodelavida.png",
      file: "/books/Eljuegodelavidaycomojugarlo.pdf",
    },
   
  ]);

  return (
    <div className="container-noticias">
      {books.map((book, i) => (
        <div key={i} className="card">
          <Image
            src={book.cover}
            alt={book.title}
            width={150}
            height={220}
            className="cover"
          />
          <h2>{book.title}</h2>
          <p className="author">por {book.author}</p>
          <p className="description">{book.description}</p>
          {book.file ? (
            <Link href={book.file} target="_blank" className="btn">
              <p>Download</p>
            </Link>
          ) : (
            <Link href={book.link} target="_blank" className="btn alt">
              Ver más
            </Link>
          )}
        </div>
      ))}

      <style jsx>{`
        .container-noticias {
          height: auto;
          max-width: 900px;
          margin: 1rem auto;
          display: grid;
          gap: 1.5rem;
          padding: 1rem;
          /* Grid responsive */
          grid-template-columns: repeat(2, 1fr);
        }

        /* Para pantallas más grandes: 3 columnas */
        @media (min-width: 768px) {
          .container-noticias {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Para pantallas muy grandes: 4 columnas */
        @media (min-width: 1200px) {
          .container-noticias {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .card {
          border-radius: 12px;
          padding: 0rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cover {
          border-radius: 8px;
        }

        h2 {
          font-size: 1.1rem;
          margin: 0.5rem 0rem 0.1rem 0rem;
          color: #ffffff;
        }

        .author {
          font-size: 0.7rem;
          color: #d4d4d4ff;
          margin: 0 0 0 0;
        }

        .description {
          font-size: 0.8rem;
          margin: 0.4rem 0 1rem 0;
          color: #888888ff;
        }
     
        .btn {
          display: inline-block;
          padding: 0.3rem 1rem;
          color: #fff;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .btn:hover {
          background: #1e40af;
        }

        .btn.alt {
          background: #16a34a;
        }

        .btn.alt:hover {
          background: #15803d;
        }
      `}</style>
    </div>
  );
}
