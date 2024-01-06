import { ReactNode, createContext, useState } from "react";

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
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const UserContext = ({ children }: UserContextProps) => {
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
  };

  const authInfo = { loggedUser, logout };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
