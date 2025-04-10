// components/products/productCreator.js
import { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';

export const ProductCreator = ({ 
  product = {}, 
  handleChange, 
  createProduct, 
  loading, 
  error,
  onClose 
}) => {
  return (
    <div className="cyber-modal">
      <div className="cyber-modal-content">
        <div className="cyber-modal-header">
          <h2 className="cyber-modal-title">NUEVO PRODUCTO</h2>
          <button className="cyber-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="cyber-modal-body">
          <input
            className="cyber-input"
            type="text"
            name="name"
            placeholder="NOMBRE"
            value={product.name}
            onChange={handleChange}
            required
          />

          <input
            className="cyber-input"
            type="number"
            name="price"
            placeholder="PRECIO"
            value={product.price}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
          />

          <input
            className="cyber-input"
            type="text"
            name="category"
            placeholder="CATEGORÍA"
            value={product.category}
            onChange={handleChange}
            required
          />

          <input
            className="cyber-input"
            type="text"
            name="supplier"
            placeholder="PROVEEDOR"
            value={product.supplier}
            onChange={handleChange}
            required
          />

          <input
            className="cyber-input"
            type="text"
            name="lugarDeVenta"
            placeholder="LUGAR DE VENTA"
            value={product.lugarDeVenta}
            onChange={handleChange}
            required
          />

          <input
            className="cyber-input"
            type="text"
            name="marca"
            placeholder="MARCA"
            value={product.marca}
            onChange={handleChange}
            required
          />

          <input 
            type="file" 
            name="imagen" 
            onChange={handleChange} 
            accept="image/*"
            className="cyber-input"
          />

          {error && (
            <div className="cyber-alert error">
              <div className="cyber-alert-icon">⚠</div>
              {error}
            </div>
          )}

          <button 
            className="cyber-button" 
            onClick={createProduct}
            disabled={loading}
          >
            <span className="cyber-button-text">
              {loading ? 'PROCESANDO...' : 'CREAR PRODUCTO'}
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .cyber-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .cyber-modal-content {
          position: relative;
          width: 90%;
          max-width: 400px;
          background: rgba(20, 25, 35, 0.95);
          border: var(--cyber-border);
          border-radius: 5px;
          box-shadow: var(--cyber-glow);
          padding: 1.5rem;
        }
        
        .cyber-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .cyber-modal-title {
          color: var(--neon-green);
          font-size: 1.2rem;
          margin: 0;
        }
        
        .cyber-modal-close {
          background: none;
          border: none;
          color: var(--neon-pink);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0 0.5rem;
        }
        
        .cyber-modal-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
};

export default ProductCreator;