import { useState, useEffect, useCallback } from 'react';

const useNotiData = (endpoint, limit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  
  // Función para obtener Notis con paginación
const fetchData = useCallback(async (pageToFetch = 1) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/${endpoint}?page=${pageToFetch}&limit=${limit}`);
      if (!response.ok) throw new Error('Error al obtener los datos');
      const result = await response.json();
      
  // Si es la primera página, reemplazamos los datos
  // Si es una página posterior, los agregamos

      setData(prev => pageToFetch === 1 ? result.notis : [...prev, ...result.notis]);
      
      setHasMore(result.pagination?.hasMore || false);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  }, [baseURL, endpoint]);

  // Cargar más datos
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    const nextPage = page + 1;
    await fetchData(nextPage);
    setPage(nextPage);
  }, [page, loading, hasMore, fetchData]);

  // Función para resetear la paginación
  const resetPagination = useCallback(async () => {
    setPage(1);
    await fetchData(1);
  }, [fetchData]);

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
      setData((prevData) => [newNoti.noti, ...prevData]); // Actualizar el estado local
      await resetPagination(); // Resetear paginación después de crear
      return newNoti;
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
      setData((prevData) => prevData.filter((noti) => noti._id !== id));
      await resetPagination(); // Resetear paginación después de eliminar
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
      const updatedNoti = await response.json();
      setData((prevData) =>
        prevData.map((noti) => (noti._id === id ? updatedNoti.noti : noti))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Carga inicial
  useEffect(() => {
    fetchData(1);
  }, [fetchData]);

  return { 
    data, 
    loading, 
    error, 
    hasMore,
    createItem, 
    deleteItem, 
    likeItem, 
    loadMore,
    resetPagination
  };
};

export default useNotiData;