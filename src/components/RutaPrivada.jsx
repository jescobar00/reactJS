import { Navigate, Outlet } from "react-router-dom";

function RutaPrivada({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
}

export default RutaPrivada;
