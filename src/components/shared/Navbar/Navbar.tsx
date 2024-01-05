import { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const loggedUser = authContext?.loggedUser;
  const logout = authContext?.logout;

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Book Showcase</div>
        {loggedUser?.user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-20 border border-gray-300 rounded-full bg-accent">
                <p className="text-white text-2xl mt-2">
                  {loggedUser.user.username[0].toUpperCase()}
                </p>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="text-lg">
                  <span className="font-bold">Username: </span>
                  {loggedUser.user.username}
                </p>
              </li>

              <li>
                <button className="text-lg" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
