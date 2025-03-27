import { useProduct } from '../../services/useProducts';

export function ProductCreator() {
  const {
    product,
    products,
    loading,
    error,
    handleChange,
    createProduct,
    deleteProduct
  } = useProduct();

  return (
    <>
      <div className="cyber-container">
        <form className="cyber-form">
          <div className="cyber-header">
            <h1 className="cyber-title">CREADOR DE PRODUCTOS</h1>
            <div className="cyber-grid"></div>
          </div>

          <input
            className="cyber-input"
            type="text"
            name="name"
            placeholder="NOMBRE DEL PRODUCTO"
            value={product.name}
            onChange={handleChange}
          />

          <input
            className="cyber-input"
            type="number"
            name="price"
            placeholder="PRECIO (CRÉDITOS)"
            value={product.price}
            onChange={handleChange}
          />

          <button 
            className="cyber-button" 
            onClick={createProduct}
            disabled={loading}
          >
            <span className="cyber-button-text">
              {loading ? 'PROCESANDO...' : 'CREAR PRODUCTO'}
            </span>
            <span className="cyber-button-glow"></span>
          </button>

          {error && (
            <div className="cyber-alert error">
              <div className="cyber-alert-icon">⚠</div>
              {error}
            </div>
          )}

          <div className="cyber-products-list">
            {products.map(({ _id, name, price }) => (
              <div key={_id} className="cyber-product">
                <div className="cyber-product-content">
                  <div className="cyber-product-info">
                    <span className="cyber-label">IDENTIFICACIÓN: </span>
                    <span className="cyber-value">{name}</span>
                  </div>
                  <div className="cyber-product-info">
                    <span className="cyber-label">VALOR: </span>
                    <span className="cyber-value">{price} CRD</span>
                  </div>
                </div>
                <button
                  className="cyber-delete-button"
                  onClick={() => deleteProduct(_id)}
                  disabled={loading}
                >
                  <span className="cyber-delete-icon">ELIMINAR</span>
                  <span className="cyber-delete-glow"></span>
                </button>
                <div className="cyber-product-grid"></div>
              </div>
            ))}
          </div>
        </form>
      </div>

      <style jsx>{`
        :root {
          --neon-blue: rgba(10, 175, 255, 0.8);
          --neon-pink: rgba(255, 10, 175, 0.8);
          --neon-green: rgba(0, 255, 100, 0.8);
          --cyber-dark: rgba(10, 15, 25, 0.95);
          --cyber-border: 1px solid rgba(10, 175, 255, 0.3);
          --cyber-glow: 0 0 15px rgba(10, 175, 255, 0.5);
        }
        
        .cyber-container {
          display: flex;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          background: var(--cyber-dark);
          font-family: 'Courier New', monospace;
        }
        
        .cyber-form {
          position: relative;
          width: 100%;
          max-width: 500px;
          background: rgba(20, 25, 35, 0.7);
          border: var(--cyber-border);
          border-radius: 5px;
          box-shadow: var(--cyber-glow);
          backdrop-filter: blur(10px);
          padding: 2rem;
          overflow: hidden;
        }
        
        .cyber-header {
          position: relative;
          margin-bottom: 2rem;
        }
        
        .cyber-title {
          text-align: center;
          margin: 0 0 1rem 0;
          color: var(--neon-green);
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 10px rgba(0, 255, 100, 0.3);
        }
        
        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(10, 175, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 175, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.2;
          z-index: -1;
        }
        
        .cyber-input {
          width: 100%;
          padding: 1rem;
          margin-bottom: 1.5rem;
          background: rgba(0, 10, 20, 0.7);
          border: var(--cyber-border);
          border-radius: 3px;
          color: rgba(10, 175, 255, 0.9);
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        
        .cyber-input::placeholder {
          color: rgba(10, 175, 255, 0.5);
        }
        
        .cyber-input:focus {
          outline: none;
          border-color: rgba(10, 175, 255, 0.7);
          box-shadow: 0 0 15px rgba(10, 175, 255, 0.5);
        }
        
        .cyber-button {
          position: relative;
          width: 100%;
          padding: 1rem;
          margin: 1.5rem 0;
          background: linear-gradient(135deg, rgba(10, 50, 80, 0.8), rgba(10, 30, 60, 0.9));
          border: 1px solid rgba(10, 175, 255, 0.5);
          color: white;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .cyber-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .cyber-button:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(10, 80, 120, 0.8), rgba(10, 50, 90, 0.9));
          box-shadow: 0 0 20px rgba(10, 175, 255, 0.7);
        }
        
        .cyber-button-text {
          position: relative;
          z-index: 2;
        }
        
        .cyber-button-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: all 0.5s ease;
        }
        
        .cyber-button:hover:not(:disabled) .cyber-button-glow {
          left: 100%;
        }
        
        .cyber-alert {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          margin: 1.5rem 0;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          animation: fade-in 0.5s ease;
        }
        
        .cyber-alert-icon {
          font-size: 1.2rem;
        }
        
        .cyber-alert.error {
          background: rgba(255, 50, 50, 0.2);
          border: 1px solid rgba(255, 50, 50, 0.5);
          color: #ff4d4d;
        }
        
        .cyber-products-list {
          margin-top: 2rem;
          display: grid;
          gap: 1rem;
        }
        
        .cyber-product {
          position: relative;
          padding: 1.5rem;
          background: rgba(20, 25, 35, 0.7);
          border: var(--cyber-border);
          border-radius: 5px;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .cyber-product:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 20px rgba(10, 175, 255, 0.3);
        }
        
        .cyber-product-content {
          display: grid;
          gap: 0.5rem;
        }
        
        .cyber-product-info {
          display: flex;
          gap: 0.5rem;
        }
        
        .cyber-label {
          color: var(--neon-green);
          font-weight: bold;
        }
        
        .cyber-value {
          color: rgba(200, 220, 255, 0.9);
        }
        
        .cyber-delete-button {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 50, 50, 0.2);
          border: 1px solid rgba(255, 50, 50, 0.5);
          color: #ff4d4d;
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .cyber-delete-button:hover:not(:disabled) {
          background: rgba(255, 50, 50, 0.4);
          box-shadow: 0 0 10px rgba(255, 50, 50, 0.3);
        }
        
        .cyber-delete-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .cyber-delete-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: all 0.5s ease;
        }
        
        .cyber-delete-button:hover:not(:disabled) .cyber-delete-glow {
          left: 100%;
        }
        
        .cyber-product-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(10, 175, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 175, 255, 0.05) 1px, transparent 1px);
          background-size: 15px 15px;
          opacity: 0.15;
          pointer-events: none;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .cyber-container {
            padding: 1rem;
          }
          
          .cyber-form {
            padding: 1.5rem;
          }
          
          .cyber-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}

export default ProductCreator;