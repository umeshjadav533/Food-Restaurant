// Components/pages/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/home" />;
};

export default ProtectedRoute;
