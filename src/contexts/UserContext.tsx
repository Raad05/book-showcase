import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserType {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface AuthContextType {
  loggedUser: {
    user: UserType | null;
    token: string | null;
  };
  logout: () => void;
}

interface UserContextProps {
  children: ReactNode; // Define the type for children prop
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const UserContext = ({ children }: UserContextProps) => {
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    return {
      user: user ? JSON.parse(user) : null,
      token: token ? token : null,
    };
  });

  const logout = () => {
    setLoggedUser({ user: null, token: null });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const authInfo = { loggedUser, logout };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
