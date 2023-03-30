import { useAuth } from "../contexts/auth-context";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { currentUser } = useAuth();

  return (currentUser ? <Outlet /> : <Navigate to='/login' />)
}

export default ProtectedRoutes;