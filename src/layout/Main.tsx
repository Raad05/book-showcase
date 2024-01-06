import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="main container m-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
