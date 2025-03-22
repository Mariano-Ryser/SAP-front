// components/admin/AdminSection.js
import React from 'react';
import DataTable from './DataTable';

const AdminSection = ({ title, data, columns, loading, onDelete, onLike }) => {
  if (loading) {
    return <p>Cargando {title}...</p>;
  }

  return (
    <div className="section">
      <h2>{title}</h2>
      {data && data.length > 0 ? (
        <DataTable data={data} columns={columns} onDelete={onDelete} onLike={onLike} />
      ) : (
        <p>No hay {title.toLowerCase()} disponibles.</p>
      )}
      <style jsx>{`
        .section {
          margin-bottom: 40px;
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default AdminSection;

 