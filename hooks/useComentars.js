import { useState, useEffect } from 'react';
import {
  fetchComentars as fetchComentarsService,
  createComentar as createComentarService,
  likeComentar as likeComentarService,
  deleteComentar as deleteComentarService,
} from '../services/comentarService';

export const useComentars = () => {
  const [comentars, setComentars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [deletedMessage, setDeletedMessage] = useState(null);

  // Obtener todos los comentarios
  const loadComentars = async () => {
    setLoading(true);
    setError(null);
    try {
      const comentars = await fetchComentarsService();
      setComentars(comentars);
    } catch (error) {
      setError(error.message || 'Error al cargar comentarios');
    } finally {
      setLoading(false);
    }
  };

  // Crear un nuevo comentario
  const handleCreateComentar = async (comentar) => {
    try {
      const newComentar = await createComentarService(comentar);
      setComentars((prev) => [newComentar, ...prev]);
      setSuccessMessage('Comentario agregado con éxito!');
      setTimeout(() => setSuccessMessage(null), 2100);
      setError(null);
    } catch (error) {
      setError(error.message || 'Error al crear comentario');
    }
  };

  // Dar like a un comentario
  const handleLikeComentar = async (_id) => {
    try {
      const updatedComentar = await likeComentarService(_id);
      setComentars((prev) =>
        prev.map((comentar) =>
          comentar._id === _id ? updatedComentar : comentar
        )
      );
    } catch (error) {
      setError('Error al dar like');
    }
  };

  // Eliminar un comentario
  const handleDeleteComentar = async (_id) => {
    try {
      await deleteComentarService(_id);
      setComentars((prev) => prev.filter((comentar) => comentar._id !== _id));
      setDeletedMessage('¡Comentario eliminado!');
      setTimeout(() => setDeletedMessage(null), 2000);
    } catch (error) {
      setError(error.message || 'Error al eliminar comentario');
    }
  };

  // Cargar comentarios al montar el componente
  useEffect(() => {
    loadComentars();
  }, []);

  return {
    comentars,
    loading,
    error,
    successMessage,
    deletedMessage,
    handleCreateComentar,
    handleLikeComentar,
    handleDeleteComentar,
    setError, // Añade esto
  };
};