import { useState, useEffect } from 'react';

export default function AllData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // Hacer fetch de todos los datos del archivo JSON
      fetch('/api/data')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };

    // Fetch inicial
    fetchData();

    // Configurar un intervalo para hacer polling cada 5 segundos
    const intervalId = setInterval(fetchData, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Todos los datos</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>ID: {item.id}</p>
            <p>Nombre: {item.name}</p>
            <p>Edad: {item.age}</p>
            <p>Email: {item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}