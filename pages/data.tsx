
import { useState, useEffect } from 'react';



/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////// 1 solo objeto atravez de ID ///////////////
///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


export default function EditData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    // Obtener todos los datos del archivo JSON
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const handleSelectChange = (e) => {
    const id = parseInt(e.target.value);
    setSelectedId(id);
    const selectedItem = data.find((d) => d.id === id);
    setSelectedData(selectedItem || {});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) => (item.id === selectedId ? selectedData : item));
    fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert('Datos actualizados con éxito');
      });
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <label htmlFor="select-id">Selecciona un ID:</label>
      <select id="select-id" onChange={handleSelectChange}>
        <option value="">Selecciona</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>

      {selectedId && (
        <form onSubmit={handleSubmit}>
          {Object.keys(selectedData).map((key) => (
            key !== 'id' && (
              <div key={key}>
                <label htmlFor={key}>{key}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={selectedData[key]}
                  onChange={handleChange}
                />
              </div>
            )
          ))}
          <button type="submit">Guardar cambios</button>
        </form>
      )}
    </div>
  );
}






/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////// SOLO FUNCIONA CON 1 solo objeto///////////////
///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////





// export default function EditData() {

//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Obtener los datos del archivo JSON a través de la API
//     fetch('/api/data')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('/api/data', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//         alert('Datos actualizados con éxito');
//       });
//   };

//   if (loading) return <p>Cargando...</p>;

//   return (
//     <form onSubmit={handleSubmit}>
//       {Object.keys(data).map((key) => (
//         <div key={key}>
//           <label htmlFor={key}>{key}</label>
//           <input
//             type="text"
//             id={key}
//             name={key}
//             value={data[key]}
//             onChange={handleChange}
//           />
//         </div>
//       ))}
//       <button type="submit">Guardar cambios</button>
//     </form>
//   );
// }