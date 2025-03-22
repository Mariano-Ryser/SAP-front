// hooks/useNotiData.js
import { useState, useEffect } from 'react';

const useNotiData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Función para obtener Notis
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseURL}/${endpoint}`);
      if (!response.ok) throw new Error('Error al obtener los datos');
      const result = await response.json();
      setData(result.notis || result); // Ajusta según la respuesta de tu API
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Función para crear una notificación
  const createItem = async (noti) => {
    try {
      const response = await fetch(`${baseURL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noti),
      });
      if (!response.ok) throw new Error('Error al crear la notificación');
      const newNoti = await response.json();
      setData((prevData) => [newNoti.noti, ...prevData]);
      fetchData(); // Refrescar la lista después de eliminar // Actualizar el estado local
      return newNoti; // Devuelve la nueva notificación
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para eliminar una notificación
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${baseURL}/${endpoint}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar la notificación');
      fetchData(); // Refrescar la lista después de eliminar
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para agregar un like
  const likeItem = async (id) => {
    try {
      const response = await fetch(`${baseURL}/${endpoint}/${id}/like`, {
        method: 'PATCH',
      });
      if (!response.ok) throw new Error('Error al agregar like');
      fetchData(); // Refrescar la lista después de agregar like
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, error, createItem, deleteItem, likeItem, fetchData };
};

export default useNotiData;