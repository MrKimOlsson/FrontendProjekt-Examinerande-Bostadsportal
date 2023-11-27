import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { state } = useAuth();
  const { user } = state;
  console.log(user)

  if (!user) return <Navigate to="/login" />;
  return user ? children : <Navigate to="/login" replace state={{ from: location.pathname }} />;

};
