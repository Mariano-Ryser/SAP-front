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
  const [deletedMessage, setDeleted] = useState(null);
  const [likes, setLikes] = useState(comentar.likes);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setComentar({ ...comentar, [inputName]: inputValue });
  };

  const handleLike = async (_id) => {
    try {
      const response = await fetch(`${baseURL}/comentars/${_id}/like`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const updatedComentar = await response.json();
        // Actualizamos el estado con el comentario actualizado
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

  const handleClick = (e) => {
    e.preventDefault();
    if (comentar.titulo.trim() === '') {
      setError('Debes indicar un título');
      return;
    }
    if (comentar.text.trim() === '') {
      setError('Debes indicar una descripción');
      return;
    }
    if (comentar.author.trim() === '') {
      setError('Debes indicar un autor');
      return;
    }

    setSuccessMessage('Comentario agregado con éxito!');
    setTimeout(() => setSuccessMessage(null), 2100);
    setError(null);

    fetch(`${baseURL}/comentars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comentar),
    })
      .then((res) => res.json())
      .then((data) => {
        setComentar(initialState);
        const newComentars = [data.comentar, ...comentars];
        setComentars(newComentars);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  const fetchComentars = () => {
    fetch(`${baseURL}/comentars`)
      .then((res) => res.json())
      .then(({ comentars }) => {
        setComentars(comentars);
      });
  };

  useEffect(() => {
    fetchComentars();
  }, []);

  return (
    <>
      <form className="form">
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
          type="text"
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

        <button className="button" onClick={handleClick}>
          Enviar
        </button>

        {error && <div className="alert error">{error}</div>}
        {successMessage && <div className="alert success">{successMessage}</div>}
        {deletedMessage && <div className="alert deleted">{deletedMessage}</div>}
      </form>

      <div className="comentariosContainer">
        {comentars.map(({ _id, titulo, text, author, likes }) => (
          <div key={_id} className="comentarBox">
            <h1 className="titulo">{titulo}</h1>
            <p className="text">{text}</p>
            <span className="author">Por: {author}</span>
            <p className="likes">Likes: {likes}</p>
            <button className="likeButton" onClick={() => handleLike(_id)}>
              👍 Like
            </button>
            <span
              className="deleteButton"
              onClick={() => {
                fetch(`${baseURL}/comentars/${_id}`, { method: 'DELETE' })
                  .then((res) => res.json())
                  .then(() => {
                    fetchComentars();
                    setDeleted('¡Comentario eliminado!');
                    setTimeout(() => setDeleted(null), 2000);
                  });
              }}
            >
              X
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .form {
          width: 40rem;
          margin: auto;
          padding-top: 1rem;
          font-family:  Lato;
        }

        .date {
          font-size: 0.9rem;
          text-align: right;
          margin-bottom: 1rem;
          color: #888;
        }

        .inputField {
          font-family:  Lato;
          color:black;
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 1rem;
        }

        .textArea {
          font-family:  Lato;
          color:black;
          width: 100%;
          height: 100px;
          padding: 0.5rem;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 1rem;
        }

        .button {
          font-family:  Lato;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #005bb5;
        }

        .alert {
          font-family:  Lato;
          margin-top: 1rem;
          padding: 0.5rem;
          border-radius: 5px;
          text-align: center;
        }

        .error {
          font-family:  Lato;
          background-color: #f8d7da;
          color: #721c24;
        }

        .success {
          font-family:  Lato;
          background-color: #d4edda;
          color: #155724;
        }

        .deleted {
          font-family:  Lato;
          background-color: #cce5ff;
          color: #004085;
        }

        .comentariosContainer {
          font-family:  Lato;
          width: 80%;
          margin: auto;
          margin-top: 2rem;
        }

        .comentarBox {
          font-family:  Lato;
          backdrop-filter: blur(10px);
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .titulo {
          font-family:  Lato;
          font-size: 1.2rem;
          margin:0;
          padding:0;
        }

        .text {
          font-family:  Lato;
          font-size: 1rem;
          margin:0;
          padding:0;
        }

        .author {
          font-family:  Lato;
          font-size:0.8rem;
          margin:0;
          padding:0;
        }

        .likes {
          font-family:  Lato;
          font-size:0.8rem;
          margin:0;
          padding:0;
        }

        .likeButton {
          font-family:  Lato;
          background-color: #0070f3;
          color: white;
          padding: 0.3rem 0.9rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 0.5rem;
        }

        .likeButton:hover {
          background-color: #005bb5;
        }

        .deleteButton {
          color: red;
          cursor: pointer;
          font-weight: bold;
          font-size: 1.1rem;
          position:absolute;
          right:1.3rem;
          bottom:1rem;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .comentariosContainer {
            
          width: 90%;
          margin: auto;
          margin-top: 2rem;
        }
          .form {
            width: 90%;
          }

          .inputField,
          .textArea {
            font-size: 0.9rem;
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
