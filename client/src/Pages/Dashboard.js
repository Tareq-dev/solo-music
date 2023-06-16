import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="drawer drawer-mobile px-4">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="pt-4 flex justify-end  px-4">
            {/* <label
              htmlFor="my-drawer-2"
              className="bg-white px-2 py-1 font-bold rounded-xl shadow-md drawer-button lg:hidden"
            >
              Open Admin drawer
            </label> */}
          </div>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 bg-[#0a183d] text-white">
            {/* <!-- Sidebar content here --> */}
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
    </div>
  );
}

export default Dashboard;
