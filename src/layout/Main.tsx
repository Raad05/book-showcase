import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import UserContext from "../contexts/UserContext";

const Main = () => {
  return (
    <div className="main container m-auto">
      <UserContext>
        <Navbar></Navbar>
      </UserContext>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
