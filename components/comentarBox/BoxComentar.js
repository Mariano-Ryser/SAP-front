import { useEffect, useState } from 'react';

function BoxComentar() {
  const current = new Date();
  const datee = `${current.getDate()} / ${current.getMonth() + 1} / ${current.getFullYear()}`;
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const initialState = {
    titulo: '',
    text: '',
    author: '',
  };

  const [comentar, setComentar] = useState(initialState);
  const [comentars, setComentars] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [deletedMessage, setDeletedMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComentar({ ...comentar, [name]: value });
  };

  const handleLike = async (_id) => {
    try {
      const response = await fetch(`${baseURL}/comentars/${_id}/like`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const updatedComentar = await response.json();
        setComentars((prevComentars) =>
          prevComentars.map((comentar) =>
            comentar._id === _id ? updatedComentar.comentario : comentar
          )
        );
      } else {
        console.error('Error al agregar like:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar like:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comentar.titulo.trim()) {
      setError('Debes indicar un título');
      return;
    }
    if (!comentar.text.trim()) {
      setError('Debes indicar una descripción');
      return;
    }
    if (!comentar.author.trim()) {
      setError('Debes indicar un autor');
      return;
    }

    try {
      const response = await fetch(`${baseURL}/comentars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comentar),
      });

      if (response.ok) {
        const data = await response.json();
        setComentar(initialState);
        setComentars([data.comentar, ...comentars]);
        setSuccessMessage('Comentario agregado con éxito!');
        setTimeout(() => setSuccessMessage(null), 2100);
        setError(null);
      } else {
        console.error('Error al agregar comentario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar comentario:', error);
    }
  };
  useEffect(() => {
    const fetchComentars = async () => {
      try {
        const response = await fetch(`${baseURL}/comentars`);
        const { comentars } = await response.json();
        setComentars(comentars);
      } catch (error) {
        console.error('Error al obtener comentarios:', error);
      }
    };

    fetchComentars();
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="date">{datee}</p>

        <input
          placeholder="Título"
          className="inputField"
          maxLength="50"
          type="text"
          name="titulo"
          value={comentar.titulo}
          onChange={handleChange}
        />

        <textarea
          className="textArea"
          placeholder="Añade un comentario..."
          maxLength="1000"
          name="text"
          value={comentar.text}
          onChange={handleChange}
        />

        <input
          placeholder="Autor"
          className="inputField"
          maxLength="30"
          type="text"
          name="author"
          value={comentar.author}
          onChange={handleChange}
        />

        <button type="submit" className="button">
          Enviar
        </button>

        {error && <div className="alert error">{error}</div>}
        {successMessage && <div className="alert success">{successMessage}</div>}
        {deletedMessage && <div className="alert deleted">{deletedMessage}</div>}
      </form>
      
        {/* COMENTARIOS FETCHEADOS */}
      <div className="comentariosContainer">
        {comentars.map(({ _id, titulo, text, author, likes }) => (
          <div key={_id} className="comentarBox">
            <h1 className="titulo">{titulo}</h1>
            <p className="text">{text}</p>
            <span className="author">Por: {author}</span>
            <button className="likeButton" onClick={() => handleLike(_id)}>
              ❤️ {likes}
            </button>
           
          </div>
        ))}
      </div>

      <style jsx>{`
        .form {
          width: 100%;
          max-width: 40rem;
          margin: 0 auto;
          padding: 1rem;
          font-family: Lato, sans-serif;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .date {
          font-size: 0.9rem;
          text-align: right;
          margin-bottom: 1rem;
          color: #888;
        }

        .inputField,
        .textArea {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
          font-family: Lato, sans-serif;
        }

        .textArea {
          height: 100px;
          resize: vertical;
        }

        .button {
          width: 100%;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #0070f3, #005bb5);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-family: Lato, sans-serif;
          font-size: 1rem;
          transition: background 0.3s ease;
        }

        .button:hover {
          background: linear-gradient(135deg, #005bb5, #0070f3);
        }

        .alert {
          margin-top: 1rem;
          padding: 0.5rem;
          border-radius: 8px;
          text-align: center;
          font-family: Lato, sans-serif;
        }

        .error {
          background: rgba(255, 77, 77, 0.2);
          color: #ff4d4d;
        }

        .success {
          background: rgba(77, 255, 77, 0.2);
          color: #4dff4d;
        }

        .deleted {
          background: rgba(77, 77, 255, 0.2);
          color: #4d4dff;
        }

        .comentariosContainer {
          width: 100%;
          max-width: 40rem;
          margin: 2rem auto;
          font-family: Lato, sans-serif;
        }

        .comentarBox {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 1rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .titulo {
          font-size: 1.2rem;
          margin: 0;
          padding: 0;
          color: white;
        }

        .text {
          white-space: pre-wrap;
          font-size: 1rem;
          margin: 0.5rem 0;
          color: #ddd;
        }

        .author {
          font-size: 0.8rem;
          color: #888;
        }

        .likeButton {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          color: #ff4d4d;
          transition: transform 0.2s ease;
        }

        .likeButton:hover {
          transform: scale(1.2);
        }

        .deleteButton {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          color: rgba(255, 77, 77, 0.5);
          transition: color 0.2s ease;
        }

        .deleteButton:hover {
          color: #ff4d4d;
        }

        @media (max-width: 768px) {
          .form {
            padding: 0.5rem;
          }

          .comentarBox {
            padding: 0.8rem;
          }

          .titulo {
            font-size: 1rem;
          }

          .text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default BoxComentar;