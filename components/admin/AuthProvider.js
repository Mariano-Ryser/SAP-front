// components/AuthProvider.js (Nuevo componente contexto)
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const sessionActive = sessionStorage.getItem('sessionActive');

    // Si hay token pero no bandera de sesión, limpiar (navegador se cerró)
    if (token && !sessionActive) {
      localStorage.removeItem('adminToken');
    }

    // Si hay token y bandera, validar
    if (token && sessionActive) {
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        if (decoded.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        } else {
          logout();
        }
      } catch {
        logout();
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('adminToken', token);
    sessionStorage.setItem('sessionActive', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    sessionStorage.removeItem('sessionActive');
    setIsAuthenticated(false);
    router.push('/adminDash');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};