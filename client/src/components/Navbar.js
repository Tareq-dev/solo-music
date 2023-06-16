import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebse_auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="navbar bg-[#08192d] md:px-10 text-white py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#0a183d] rounded-box w-52"
          >
            <li className="font-semibold">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="font-semibold">
              {user ? (
                <button
                  className="bg-none text-white md:px-2 py-1"
                  onClick={logout}
                >
                  Log out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            {!user && (
              <li className="text-red-400 font-semibold">
                <Link to="/signup">Create an account</Link>
              </li>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-white font-bold"
        >
          <span className="text-red-500">Solo</span> Music
        </Link>
      </div>
      <div className="navbar-end md:hidden">
        <label
          htmlFor="my-drawer-2"
          className=" px-2 py-1 font-bold rounded-xl shadow-md drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="font-semibold">
            {user ? (
              <button className="bg-none text-white px-2 py-1" onClick={logout}>
                Log out
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          {!user && (
            <li className="text-red-400 font-semibold">
              <Link to="/signup">Create an account</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
