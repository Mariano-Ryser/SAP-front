// components/admin/DataTable.js
import React from 'react';

const DataTable = ({ data, columns, onDelete, onLike }) => {
  const handleEdit = (id) => {
    console.log('Editar comentario con ID:', id);
    // Aquí puedes implementar la lógica para editar un comentario
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleLike = (id) => {
    onLike(id);
  };
  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {columns.map((column, index) => (
                <td key={index}>{item[column.accessor]}</td>
              ))}
              <td>
                <button onClick={() => handleEdit(item._id)}>Editar</button>
                <button onClick={() => handleDelete(item._id)}>Eliminar</button>
                <button onClick={() => handleLike(item._id)}>Like</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th,
        td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #444;
          color: #ffffff;
        }
        th {
          background-color: #333;
        }
        tr:hover {
          background-color: #444;
        }
        button {
          margin-right: 8px;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: #ffffff;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default DataTable;