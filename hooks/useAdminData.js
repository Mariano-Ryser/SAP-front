// hooks/useAdminData.js
// hooks/useAdminData.js
import { useState, useEffect } from 'react';

const useAdminData = (baseURL) => {
  const [comentars, setComentars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAdminData = async (accessKey) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/admin/dashboard`, {
        headers: {
          Authorization: `Bearer ${accessKey}`, // Asegúrate de enviar el token aquí
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const data = await response.json();
      setComentars(data.comentars);
    } catch (error) {
      setError('Error al obtener los datos');
    } finally {
      setLoading(false);
    }
  };

  const deleteComentar = async (id, accessKey) => {
    try {
      await fetch(`${baseURL}/comentar/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessKey}`, // Asegúrate de enviar el token aquí
        },
      });
      setComentars(comentars.filter((comentar) => comentar._id !== id));
    } catch (error) {
      setError('Error al eliminar el comentario');
    }
  };

  const likeComentar = async (id, accessKey) => {
    try {
      const response = await fetch(`${baseURL}/comentar/like/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessKey}`, // Asegúrate de enviar el token aquí
        },
      });
      const data = await response.json();
      setComentars(comentars.map((comentar) =>
        comentar._id === id ? data.comentario : comentar
      ));
    } catch (error) {
      setError('Error al agregar like');
    }
  };

  return {
    comentars,
    loading,
    error,
    fetchAdminData,
    deleteComentar,
    likeComentar,
  };
};

export default useAdminData;

 