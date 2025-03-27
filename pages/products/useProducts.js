// frontend/pages/products/useProduct.js
import { useState, useEffect } from 'react';

export const useProduct = () => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const initialState = { name: '', price: 0 };
  
  const [product, setProduct] = useState(initialState);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/products`);
      const { products } = await res.json();
      setProducts(products);
      setError(null);
    } catch (err) {
      setError('Error al cargar productos');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      setProducts(prev => [data.product, ...prev]);
      setProduct(initialState);
      setError(null);
      return { success: true };
    } catch (err) {
      setError('Error al crear producto');
      console.error('Error:', err);
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await fetch(`${baseURL}/products/${id}`, { method: 'DELETE' });
      setProducts(prev => prev.filter(p => p._id !== id));
      setError(null);
      return { success: true };
    } catch (err) {
      setError('Error al eliminar producto');
      console.error('Error:', err);
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    product,
    products,
    loading,
    error,
    handleChange,
    createProduct,
    deleteProduct,
    fetchProducts
  };
};