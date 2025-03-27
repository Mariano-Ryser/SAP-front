// components/withAuth.js
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthProvider';

export default function withAuth(WrappedComponent) {
  return function ProtectedRoute(props) {
    const { isAuthenticated } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/adminDash');
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
}