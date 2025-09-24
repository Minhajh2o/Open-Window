import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center flex">
        {/* menu items */}
        <ul className="menu menu-horizontal px-1 text-lg text-gray-500">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Career</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {/* profile */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {/* login button */}
        <Link to="/auth/login" className="btn bg-gray-900 text-base-100">Login</Link>
        <Link to="/auth/register" className="btn bg-gray-900 text-base-100">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
