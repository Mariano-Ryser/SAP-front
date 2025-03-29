import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Estado de autenticación
  const router = useRouter();

  // Verificación de sesión
  const checkSession = async () => {
    try {
      const response = await fetch(`${baseURL}/admin/check-session`, {
        method: 'GET',
        credentials: 'include', // 🔥 Asegura que se envíen cookies
      });

      const data = await response.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error checking session:', error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {    //PRIMER PASO DE LLAMADA
    checkSession();    //CORRE CHECKSESSION()    
  }, []);

  // Función de login
  const login = () => {
    setIsAuthenticated(true); // Cambia el estado a autenticado
    router.push('/adminDash'); // Redirige al panel de administración is AUTHENTICATED!!!!
  };

  // Función de logout
  const logout = async () => {
    await fetch(`${baseURL}/admin/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setIsAuthenticated(false);
    router.push('/adminDash');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



































// // components/AuthProvider.js (Nuevo componente contexto)
// import { createContext, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     const sessionActive = sessionStorage.getItem('sessionActive');

//     // Si hay token pero no bandera de sesión, limpiar (navegador se cerró)
//     if (token && !sessionActive) {
//       localStorage.removeItem('adminToken');
//     }

//     // Si hay token y bandera, validar
//     if (token && sessionActive) {
//       try {
//         const decoded = JSON.parse(atob(token.split('.')[1]));
//         if (decoded.exp * 1000 > Date.now()) {
//           setIsAuthenticated(true);
//         } else {
//           logout();
//         }
//       } catch {
//         logout();
//       }
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('adminToken', token);
//     sessionStorage.setItem('sessionActive', 'true');
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('adminToken');
//     sessionStorage.removeItem('sessionActive');
//     setIsAuthenticated(false);
//     router.push('/adminDash');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };