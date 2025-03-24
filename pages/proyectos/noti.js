import { useState , useEffect} from 'react';
import Link from 'next/link';
import useNotiData from '../../hooks/useNotiData';

function Noti() {
  const current = new Date();
  const datee = `${current.getDate()} / ${current.getMonth() + 1} / ${current.getFullYear()}`;

  const { data: notis, loading, error, createItem, fetchData,likeItem} = useNotiData('notis');
  const [noti, setNoti] = useState({ titulo: '', text: '' });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoti((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!noti.titulo.trim() || !noti.text.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      await createItem(noti); // Crear la notificación
      setNoti({ titulo: '', text: '' }); // Limpiar el formulario
      setSuccessMessage('Noti creado con éxito!'); // Mostrar mensaje de éxito
      setTimeout(() => setSuccessMessage(null), 2100);
    } catch (err) {
      console.error('Error al crear noti:', err);
    }
  };

  useEffect(() => {
    fetchData(notis);
  }, []);

  return (
    <div className="container">
      

      <form className="form" onSubmit={handleSubmit}>
        <p className="date">{datee}</p>

        <input
          placeholder="Título"
          className="input"
          name="titulo"
          value={noti.titulo}
          onChange={handleChange}
        />

        <textarea
          placeholder="Añade un notiio.."
          className="textarea"
          name="text"
          value={noti.text}
          onChange={handleChange}
        />

        <button className="button" type="submit">
          Enviar
        </button>
        {successMessage && <div className="success">{successMessage}</div>}
      </form>

      <div className="notis-container">
        {loading ? (
          <p>Cargando notificaciones...</p>
        ) : (
          notis.map(({ _id, titulo, text, likes }) => (
            <div key={_id} className="noti-card">
              <h2 className="noti-title">{titulo}</h2>
              <p className="noti-text">{text}</p>
              <div className="actions">
               <button className="likeButton" onClick={() => likeItem(_id)}>
                  ❤️ {likes}
                </button>
              
              </div>
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: #1a1a1a;
          color: #fff;
          font-family: 'Lato', sans-serif;
        }

        .back-link {
          color: #0070f3;
          text-decoration: none;
          font-size: 1.2rem;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .input, .textarea {
          padding: 10px;
          border: 1px solid #444;
          border-radius: 5px;
          background: #333;
          color: #fff;
          font-size: 1rem;
        }

        .textarea {
          height: 100px;
          resize: vertical;
        }

        .button {
          padding: 10px;
          background: #0070f3;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        .button:hover {
          background: #005bb5;
        }

        .success, .error {
          padding: 10px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
        }

        .success {
          background: #17b11c;
        }

        .error {
          background: #ac0b0b;
        }

        .notis-container {
          display: grid;
          gap: 10px;
        }

        .noti-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #444;
          border-radius: 10px;
          padding: 15px;
          backdrop-filter: blur(10px);
        }

        .noti-title {
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        .noti-text {
          white-space: pre-line;
          margin-bottom: 10px;
        }

        .actions {
          display: flex;
          gap: 10px;
        }

        .likeButton, .delete-button {
          background: none;
          border: none;
          color:rgb(255, 255, 255);
          cursor: pointer;
          font-size: 1.2rem;
        }

        .delete-button {
          color: #0070f3;
        }

        @media (max-width: 600px) {
          .container {
            padding: 10px;
          }

          .input, .textarea, .button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Noti;