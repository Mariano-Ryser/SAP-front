const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchComentars = async () => {
  const response = await fetch(`${baseURL}/comentars`);
  if (!response.ok) throw new Error('Error al obtener comentarios');
  const { comentars } = await response.json();
  return comentars || [];
};

export const createComentar = async (comentarData) => {  // Cambié el nombre del parámetro
  try {
    const response = await fetch(`${baseURL}/comentars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comentarData)  // Usar el nuevo nombre aquí
    });
    if (!response.ok) throw new Error('Error al crear comentario');
    const data = await response.json();  // Cambié a data en lugar de desestructurar directamente
    return data.comentar;  // Acceder a la propiedad comentar
  } catch (error) {
    console.error('Error al crear comentario:', error);
    throw error;
  }
};

export const likeComentar = async (_id) => {
  const response = await fetch(`${baseURL}/comentars/${_id}/like`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Error al dar like');
  const { comentar } = await response.json();
  return comentar;
};

export const deleteComentar = async (_id) => {
  const response = await fetch(`${baseURL}/comentars/${_id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar comentario');
};