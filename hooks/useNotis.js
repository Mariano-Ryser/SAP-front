// hooks/useNotis.js
import { useState, useEffect } from 'react';
import {
  fetchNotis as fetchNotisService,
  createNoti as createNotiService,
  likeNoti as likeNotiService,
  deleteNoti as deleteNotiService,
} from '../services/notiService';

export const useNotis = () => {
  const [notis, setNotis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [deletedMessage, setDeletedMessage] = useState(null);

  
  // Obtener todas las notificaciones
  const loadNotis = async () => {
    setLoading(true);
    setError(null);
    try {
      const notis = await fetchNotisService();
      setNotis(notis);
    } catch (error) {
      setError(error.message || 'Error al cargar notificaciones');
    } finally {
      setLoading(false);
    }
  };

  // Crear una nueva notificación
  const handleCreateNoti = async (noti) => {
    try {
      const newNoti = await createNotiService(noti);
      setNotis((prev) => [newNoti, ...prev]);
      setSuccessMessage('Notificación agregada con éxito!');
      setTimeout(() => setSuccessMessage(null), 2100);
      setError(null);
    } catch (error) {
      setError(error.message || 'Error al crear notificación');
    }
  };

  // Dar like a una notificación
  const handleLikeNoti = async (_id) => {
    try {
      const updatedNoti = await likeNotiService(_id);
      setNotis((prev) =>
        prev.map((noti) =>
          noti._id === _id ? updatedNoti : noti
        )
      );
    } catch (error) {
      setError(error.message || 'Error al dar like');
    }
  };

  // Eliminar una notificación
  const handleDeleteNoti = async (_id) => {
    try {
      await deleteNotiService(_id);
      setNotis((prev) => prev.filter((noti) => noti._id !== _id));
      setDeletedMessage('¡Notificación eliminada!');
      setTimeout(() => setDeletedMessage(null), 2000);
    } catch (error) {
      setError(error.message || 'Error al eliminar notificación');
    }
  };

  // Cargar notificaciones al montar el componente
  useEffect(() => {
    loadNotis();
  }, []);

  return {
    notis,
    loading,
    error,
    successMessage,
    deletedMessage,
    handleCreateNoti,
    handleLikeNoti,
    handleDeleteNoti,
  };
};