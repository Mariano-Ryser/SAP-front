// services/comentarService.js
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Obtener todos los comentarios
export const fetchComentars = async () => {
  try {
    const response = await fetch(`${baseURL}/comentars`);
    const data = await response.json();
    return data.comentars || []; // si no hay datos devuelve un array vacío
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    throw error;
  }
};

// Crear un nuevo comentario
export const createComentar = async (comentar) => {
  try {
    const response = await fetch(`${baseURL}/comentars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comentar),
    });
    if (!response.ok) {
      throw new Error('Error al crear comentario');
    }
    const data = await response.json();
    return data.comentar;
  } catch (error) {
    console.error('Error al crear comentario:', error);
    throw error;
  }
};

// Dar like a un comentario
export const likeComentar = async (_id) => {
  try {
    const response = await fetch(`${baseURL}/comentars/${_id}/like`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Error al dar like');
    }
    const data = await response.json();
    return data.comentar;
  } catch (error) {
    console.error('Error al dar like:', error);
    throw error;
  }
};

// Eliminar un comentario
export const deleteComentar = async (_id) => {
  try {
    const response = await fetch(`${baseURL}/comentars/${_id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar comentario');
    }
  } catch (error) {
    console.error('Error al eliminar comentario:', error);
    throw error;
  }
};