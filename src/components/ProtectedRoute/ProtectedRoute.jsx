import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Auth from "../../store/ContextAuth/Auth"; // hubi path-ka saxda ah

const ProtectedRoute = ({ children }) => {
  const ctx = useContext(Auth);

  if (!ctx.login) {
    // Haddii user aan login ahayn, u redirect login page
    return <Navigate to="/login" replace />;
  }

  return children; // Haddii login yahay, tus page-ka
};

export default ProtectedRoute;
