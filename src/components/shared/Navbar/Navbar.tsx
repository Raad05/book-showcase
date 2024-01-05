import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const loggedUser = authContext?.loggedUser;
  const logout = authContext?.logout;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Book Showcase</div>
        {loggedUser?.user ? (
          <div className="flex items-center">
            <p className="text-white">Welcome, {loggedUser.user.username}</p>
            <button
              onClick={logout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
