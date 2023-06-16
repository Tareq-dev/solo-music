import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../firebse_auth";

function Dashboard() {
  const [user] = useAuthState(auth);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-48 bg-[#0a183d] text-white">
          {/* <!-- Sidebar content here --> */}
          <div className="flex justify-center mb-8 mt-4">
            <div>
              <div className="flex justify-center">
                <div className="avatar online mt-1">
                  <div className="w-10 h-10 rounded-full border-2 border-white  ">
                    <img
                      src={
                        user?.photoURL
                          ? user?.photoURL
                          : "https://cdn-icons-png.flaticon.com/512/219/219983.png?w=740&t=st=1686912318~exp=1686912918~hmac=ce2a85c36333d701149bfe27eb982ef94dd3df76df04c395cd070148b81fd0a2"
                      }
                    />
                  </div>
                </div>
              </div>
              <p className="my-1">
                @{user.displayName || user?.email.split("@")[0]}
              </p>
            </div>
          </div>
          <li>
            <NavLink className="py-2 my-1" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="py-2 my-1" to="/dashboard/add-music">
              Add Music
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
