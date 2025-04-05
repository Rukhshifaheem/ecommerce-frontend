import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token"); // Get token from cookies

    if (!token) {
      navigate("/login"); // Redirect to login if no token is found
    } else {
      setIsAuthenticated(true); // Allow access to protected route
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return <div>Loading...</div>; // Optional: display loading state while redirecting
  }

  return children; // Render protected content if authenticated
};

export default ProtectedRoute;
