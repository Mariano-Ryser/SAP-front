import React, { useState } from 'react';

const GastosDiarios = () => {
  const [gastos, setGastos] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');

  const agregarGasto = () => {
    if (descripcion && monto) {
      const nuevoGasto = {
        id: Date.now(),
        descripcion,
        monto: parseFloat(monto),
      };
      setGastos([...gastos, nuevoGasto]);
      setDescripcion('');
      setMonto('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Registro de Gastos Diarios</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Descripción del gasto"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          style={styles.input}
        />
        <button onClick={agregarGasto} style={styles.button}>
          Agregar Gasto
        </button>
      </div>
      <div style={styles.gastosContainer}>
        <h2 style={styles.subheading}>Lista de Gastos:</h2>
        {gastos.length === 0 ? (
          <p style={styles.emptyMessage}>No hay gastos registrados.</p>
        ) : (
          <ul style={styles.gastosList}>
            {gastos.map((gasto) => (
              <li key={gasto.id} style={styles.gastoItem}>
                {gasto.descripcion} - ${gasto.monto.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    marginRight: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  gastosContainer: {
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
  },
  subheading: {
    marginBottom: '10px',
  },
  emptyMessage: {
    color: '#888',
  },
  gastosList: {
    listStyle: 'none',
    padding: '0',
  },
  gastoItem: {
    marginBottom: '5px',
    fontSize: '16px',
  },
};

export default GastosDiarios;
