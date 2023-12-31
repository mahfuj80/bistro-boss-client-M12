/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress mx-auto w-56 py-16"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
