import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const authContext = useContext(AuthContext);
  const loggedUser = authContext?.loggedUser;
  const location = useLocation();

  if (!loggedUser) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
