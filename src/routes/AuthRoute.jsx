import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router';

const AuthRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthRoute;
