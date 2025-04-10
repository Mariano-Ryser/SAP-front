// components/products/listProduct.js
import { useState } from 'react';
import { useProduct } from '../../services/useProducts';
import { formatCurrency } from '../../utils/formatters';
import { ProductCreator } from './productCreator';

export function ListProduct() {
  const {
    product,  
    products,
    total,
    loading,
    error,
    handleChange,
    createProduct,
    deleteProduct,
    fetchProducts,
    filters,
    handleFilterChange,
    applyFilters,
    resetFilters
  } = useProduct();

  const [showModal, setShowModal] = useState(false);

  // Opciones para los selects
  const sortOptions = [
    { value: '', label: 'Ordenar...' },
    { value: 'price-asc', label: 'Precio ↑' },
    { value: 'price-desc', label: 'Precio ↓' },
    { value: 'name-asc', label: 'Nombre A-Z' },
    { value: 'name-desc', label: 'Nombre Z-A' }
  ];

  // Obtener valores únicos para los filtros
  const uniqueCategories = [...new Set(products.map(p => p.category))];
  const uniqueSuppliers = [...new Set(products.map(p => p.supplier))];
  const uniqueLugares = [...new Set(products.map(p => p.lugarDeVenta))];
  const uniqueMarcas = [...new Set(products.map(p => p.marca))];

  return (
    <div className="cyber-container">
      {/* Filtros compactos */}
      <div className="cyber-filters-compact">
        <select
          className="cyber-filter-select"
          name="sort"
          value={filters.sort}
          onChange={(e) => handleFilterChange('sort', e.target.value)}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          className="cyber-filter-select"
          name="category"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option value="">Categoría</option>
          {uniqueCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="cyber-filter-select"
          name="marca"
          value={filters.marca}
          onChange={(e) => handleFilterChange('marca', e.target.value)}
        >
          <option value="">Marca</option>
          {uniqueMarcas.map(marca => (
            <option key={marca} value={marca}>{marca}</option>
          ))}
        </select>

        <button
          className="cyber-small-button"
          onClick={applyFilters}
          disabled={loading}
        >
          Filtrar
        </button>

        <button
          className="cyber-small-button reset"
          onClick={resetFilters}
          disabled={loading}
        >
          Limpiar
        </button>

        <button
          className="cyber-small-button add"
          onClick={() => setShowModal(true)}
        >
          + Nuevo
        </button>
      </div>

      {/* Lista tipo Excel */}
      <div className="cyber-excel-table">
        <div className="cyber-excel-header">
          <div className="cyber-excel-cell">Imagen</div>
          <div className="cyber-excel-cell">Nombre</div>
          <div className="cyber-excel-cell">Precio</div>
          <div className="cyber-excel-cell">Categoría</div>
          <div className="cyber-excel-cell">Proveedor</div>
          <div className="cyber-excel-cell">Acciones</div>
        </div>

        {products.length === 0 ? (
          <div className="cyber-excel-row">
            <div className="cyber-excel-cell" colSpan="6">
              No se encontraron productos
            </div>
          </div>
        ) : (
          products.map((product) => (
            <div key={product._id} className="cyber-excel-row">
              <div className="cyber-excel-cell">
                {product.imagen && (
                  <img 
                    src={product.imagen} 
                    alt={product.name} 
                    className="cyber-excel-image" 
                  />
                )}
              </div>
              <div className="cyber-excel-cell">{product.name}</div>
              <div className="cyber-excel-cell">{formatCurrency(product.price)}</div>
              <div className="cyber-excel-cell">{product.category}</div>
              <div className="cyber-excel-cell">{product.supplier}</div>
              <div className="cyber-excel-cell">
                <button
                  className="cyber-excel-delete"
                  onClick={() => deleteProduct(product._id)}
                  disabled={loading}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cyber-total">
        Total: {formatCurrency(total)} CRD
      </div>

      {showModal && (
        <ProductCreator
          product={product}
          handleChange={handleChange}
          createProduct={(e) => {
            createProduct(e).then(() => {
              if (!error) setShowModal(false);
            });
          }}
          loading={loading}
          error={error}
          onClose={() => setShowModal(false)}
        />
      )}

      <style jsx>{`
        .cyber-container {
          padding: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .cyber-filters-compact {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .cyber-filter-select {
          padding: 0.5rem;
          background: rgba(0, 5, 15, 0.7);
          border: var(--cyber-border);
          border-radius: 3px;
          color: rgba(10, 175, 255, 0.9);
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          min-width: 120px;
        }
        
        .cyber-small-button {
          padding: 0.5rem 1rem;
          background: rgba(10, 50, 80, 0.8);
          border: 1px solid rgba(10, 175, 255, 0.5);
          color: white;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          cursor: pointer;
          border-radius: 3px;
        }
        
        .cyber-small-button:hover:not(:disabled) {
          background: rgba(10, 80, 120, 0.8);
        }
        
        .cyber-small-button.reset {
          background: rgba(80, 10, 50, 0.8);
          border-color: rgba(255, 10, 175, 0.5);
        }
        
        .cyber-small-button.reset:hover:not(:disabled) {
          background: rgba(120, 10, 80, 0.8);
        }
        
        .cyber-small-button.add {
          background: rgba(10, 80, 50, 0.8);
          border-color: rgba(10, 255, 175, 0.5);
        }
        
        .cyber-small-button.add:hover:not(:disabled) {
          background: rgba(10, 120, 80, 0.8);
        }
        
        .cyber-excel-table {
          width: 100%;
          border: var(--cyber-border);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .cyber-excel-header {
          display: grid;
          grid-template-columns: 80px 2fr 1fr 1fr 1fr 100px;
          background: rgba(10, 15, 25, 0.9);
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.8rem;
        }
        
        .cyber-excel-row {
          display: grid;
          grid-template-columns: 80px 2fr 1fr 1fr 1fr 100px;
          border-bottom: var(--cyber-border);
        }
        
        .cyber-excel-row:last-child {
          border-bottom: none;
        }
        
        .cyber-excel-row:hover {
          background: rgba(10, 175, 255, 0.05);
        }
        
        .cyber-excel-cell {
          padding: 0.5rem;
          display: flex;
          align-items: center;
          font-size: 0.9rem;
        }
        
        .cyber-excel-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 3px;
          border: var(--cyber-border);
        }
        
        .cyber-excel-delete {
          padding: 0.3rem 0.6rem;
          background: rgba(255, 50, 50, 0.2);
          border: 1px solid rgba(255, 50, 50, 0.5);
          color: #ff4d4d;
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          cursor: pointer;
          border-radius: 3px;
        }
        
        .cyber-excel-delete:hover:not(:disabled) {
          background: rgba(255, 50, 50, 0.4);
        }
        
        .cyber-total {
          margin-top: 1rem;
          text-align: right;
          font-weight: bold;
          color: var(--neon-green);
        }
        
        @media (max-width: 768px) {
          .cyber-excel-header,
          .cyber-excel-row {
            grid-template-columns: 60px 1fr 1fr 100px;
          }
          
          .cyber-excel-cell:nth-child(4),
          .cyber-excel-cell:nth-child(5) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default ListProduct;