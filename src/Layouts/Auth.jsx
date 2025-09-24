import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header>
        <Navbar />
      </header>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Auth;
