// pages/adminDash.js
import { useState } from 'react';
import useAdminData from '../hooks/useAdminData';
import AdminSection from '../components/admin/AdminSection';

export default function AdminDash() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [accessKey, setAccessKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const {
    comentars,
    loading,
    error: dataError,
    fetchAdminData,
    deleteComentar,
    likeComentar,
  } = useAdminData(baseURL);

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/admin/verify-key`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: accessKey }),
      });
      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        setError('');
        fetchAdminData(data.token); // Pasa el token recibido del backend
      } else {
        setError('Clave de acceso incorrecta');
      }
    } catch (error) {
      console.error('Error al verificar la clave:', error);
      setError('Error al conectar con el servidor');
    }
  };
  if (!isAuthenticated) {
    return (
      <div className="container">
        <h1 className="title">Acceso al Panel de Administración</h1>
        <form onSubmit={handleLogin} className="form">
          <input
            type="password"
            placeholder="Ingrese la clave de acceso"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Acceder
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
            padding: 20px;
            background-color: #1a1a1a;
            color: rgb(243, 243, 243);
            font-family: Arial, sans-serif;
            text-align: center;
          }

          .title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #ffffff;
          }
          .form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 100%;
            max-width: 400px;
          }

          .input {
            padding: 12px;
            font-size: 1rem;
            border-radius: 8px;
            border: 1px solid #444;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            background-color: #333;
            color: rgb(255, 255, 255);
          }

          .button {
            padding: 12px 20px;
            font-size: 1rem;
            border-radius: 8px;
            border: none;
            background-color: #0070f3;
            color: #ffffff;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 100%;
            max-width: 400px;
          }

          .button:hover {
            background-color: #005bb5;
          }
          .error {
            color: #ff4d4d;
            margin-top: 10px;
            font-size: 0.9rem;
          }
          @media (max-width: 768px) {
            .title {
              font-size: 1.5rem;
            }
            .input {
              padding: 10px;
              font-size: 0.9rem;
            }
            .button {
              padding: 10px 15px;
              font-size: 0.9rem;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="container">
    <h1 className="title">Bienvenido al Panel de Administración</h1>
    <p className="subtitle">Aquí puedes gestionar todo tu contenido.</p>

      {loading && <p>Cargando datos...</p>}
      {dataError && <p className="error">{dataError}</p>}

    {/* Sección de Comentarios */}
    <AdminSection
        title="Comentarios"
        data={comentars}
        columns={[
          { header: 'ID', accessor: '_id' },
          { header: 'Título', accessor: 'titulo' },
          { header: 'Texto', accessor: 'text' },
          { header: 'Autor', accessor: 'author' },
          { header: 'Likes', accessor: 'likes' },
        ]}
        loading={loading}
        onDelete={deleteComentar}
        onLike={likeComentar}
      />


      <style jsx>{`
        .container {
          padding: 20px;
          background-color: #1a1a1a;
          color: #ffffff;
          font-family: Arial, sans-serif;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: #cccccc;
        }

        .error {
          color: #ff4d4d;
          margin-top: 10px;
        }

        /* Estilos responsivos */
        @media (max-width: 768px) {
          .title {
            font-size: 1.5rem;
          }
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}