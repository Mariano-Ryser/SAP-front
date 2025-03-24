import { useState, useEffect } from 'react';

export function ProductCreator() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const initialState = { name: '', price: 0 };
  const [product, setProduct] = useState(initialState);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setProduct({
      ...product,
      [inputName]: inputValue,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseURL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      setProduct(initialState);
      const newProducts = [data.product, ...products];
      setProducts(newProducts);
      console.log('Producto creado con éxito!');
    } catch (error) {
      console.log('Error al crear el producto:', error);
    }
  };

  const fetchProducts = () => {
    fetch(`${baseURL}/products`)
      .then((res) => res.json())
      .then(({ products }) => {
        setProducts(products);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <form className="form">
          <h1 className="title">Inserte Item</h1>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Nombre del producto"
            value={product.name}
            onChange={handleChange}
          />
          <input
            className="input"
            type="number"
            name="price"
            placeholder="Precio"
            value={product.price}
            onChange={handleChange}
          />
          <button className="button" onClick={handleClick}>
            Erstellen
          </button>

          <div className="products-list">
            {products.map(({ _id, name, price }) => (
              <div key={_id} className="product-box">
                <div className="product-info">
                  <span className="label">Nombre:</span>
                  <span className="value">{name}</span>
                  <br />
                  <span className="label">Precio:</span>
                  <span className="value">${price}</span>
                </div>
                <div
                  className="delete-button"
                  onClick={() => {
                    fetch(`${baseURL}/products/${_id}`, { method: 'DELETE' })
                      .then((res) => res.json())
                      .then(() => {
                        fetchProducts();
                      });
                  }}
                >
                  🗑️
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>

      <style jsx>{`
        /* Estilos generales */
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a, #2c3e50);
          color: #fff;
          font-family: 'Arial', sans-serif;
        }

        .form {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 2rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #00ffcc;
        }

        .input {
          width: 100%;
          padding: 0.75rem;
          margin: 0.5rem 0;
          border: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: background 0.3s ease;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .input:focus {
          background: rgba(255, 255, 255, 0.2);
        }

        .button {
          width: 100%;
          padding: 0.75rem;
          margin: 1rem 0;
          border: none;
          border-radius: 8px;
          background: #00ffcc;
          color: #1a1a1a;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .button:hover {
          background: #00e6b8;
          transform: translateY(-2px);
        }

        .products-list {
          margin-top: 1.5rem;
        }

        .product-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          margin: 0.5rem 0;
          transition: background 0.3s ease;
        }

        .product-box:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .product-info {
          flex: 1;
        }

        .label {
          font-weight: bold;
          color: #00ffcc;
        }

        .value {
          color: #fff;
        }

        .delete-button {
          cursor: pointer;
          font-size: 1.2rem;
          color: #ff4d4d;
          transition: color 0.3s ease;
        }

        .delete-button:hover {
          color: #ff1a1a;
        }
      `}</style>
    </>
  );
}

export default ProductCreator;