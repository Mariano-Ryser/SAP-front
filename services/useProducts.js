// services/useProducts.js
import { useState, useEffect } from 'react';

export const useProduct = () => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const initialState = { 
    name: '', 
    price: 0,
    category: '',
    supplier: '',
    description: '',
    lugarDeVenta: '',
    marca: '',
    imagen: null
  };
  
  const [product, setProduct] = useState(initialState);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'imagen') {
      setProduct(prev => ({
        ...prev,
        imagen: files[0]
      }));
    } else {
      setProduct(prev => ({
        ...prev,
        [name]: name === 'price' ? Number(value) : value
      }));
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fetchProducts = async (queryParams = '') => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/products?${queryParams}`);
      const data = await res.json();
      
      if (data.ok) {
        setProducts(data.products);
        setTotal(data.total || 0);
        setError(null);
      } else {
        setError(data.message || 'Error al obtener productos');
      }
    } catch (err) {
      setError('Error al cargar productos');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    const queryParams = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });

    fetchProducts(queryParams.toString());
  };

  const resetFilters = () => {
    setFilters({});
    fetchProducts();
  };

  const createProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData();
      // Agregar todos los campos del producto al FormData
      Object.entries(product).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });

      const res = await fetch(`${baseURL}/products`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      
      if (data.ok) {
        setProducts(prev => [data.product, ...prev]);
        setProduct(initialState);
        setError(null);
        return { success: true };
      } else {
        setError(data.message || 'Error al crear producto');
        return { success: false, error: data.message };
      }
    } catch (err) {
      setError('Error al crear producto');
      console.error('Error:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
      fetchProducts();
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/products/${id}`, { 
        method: 'DELETE' 
      });
      
      const data = await res.json();
      
      if (data.ok) {
        setProducts(prev => prev.filter(p => p._id !== id));
        setError(null);
        return { success: true };
      } else {
        setError(data.message || 'Error al eliminar producto');
        return { success: false, error: data.message };
      }
    } catch (err) {
      setError('Error al eliminar producto');
      console.error('Error:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
      fetchProducts();
    }
  };

  const updateProduct = async (e, updatedProduct) => { // ✅ ahora recibe updatedProduct
    e.preventDefault();
    setLoading(true);
  
    try {
      const formData = new FormData();
      
      if (!updatedProduct) {
        console.error('updatedProduct es undefined o null:', updatedProduct);
        return;
      }
      Object.entries(updatedProduct).forEach(([key, value]) => {
        if (value !== null && value !== undefined && key !== '_id') {
          if (key === 'imagen' && value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, value.toString());
          }
        }
      });
  
      const res = await fetch(`${baseURL}/products/${updatedProduct._id}`, {
        method: 'PUT',
        body: formData,
      });
  
      const data = await res.json();
  
      if (data.ok) {
        setProducts(prev => prev.map(p => p._id === updatedProduct._id ? data.product : p));
        setError(null);
        return { success: true };
      } else {
        setError(data.message || 'Error al actualizar producto');
        return { success: false, error: data.message };
      }
    } catch (err) {
      setError('Error al actualizar producto');
      console.error('Error:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
      fetchProducts();
    }
  };


  // Función para establecer el producto a editar, esta funcion es llamada en el componente mapeado.
  const setProductToEdit = (productData) => {
    setProduct({
      ...productData,
      _id: productData._id // Asegurarnos de mantener el ID
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    product,
    products,
    total,
    loading,
    error,
    filters,
    handleChange,
    handleFilterChange,
    createProduct,
    deleteProduct,
    fetchProducts,
    applyFilters,
    resetFilters,
    updateProduct,
    setProductToEdit
  };
};