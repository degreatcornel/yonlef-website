import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const hasAccess = localStorage.getItem("yonlef_access");

  if (!hasAccess) {
    return <Navigate to="/unlock" />;
  }

  return children;
};

export default ProtectedRoute;