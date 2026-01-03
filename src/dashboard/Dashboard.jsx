import React from "react";
import {
  FiHome,
  FiPieChart,
  FiUsers,
  FiSettings,
  FiMenu,
  FiBell,
  FiSearch,
  FiLogOut,
  FiX,
} from "react-icons/fi";

import logo from "../assets/Casxsxpture-removebg-preview.png"
import { Link, NavLink, Outlet } from "react-router";

// --- Components ---

const Sidebar = () => {
  return (
    <div className="drawer-side z-40">
      {/* Overlay to close sidebar when clicking outside */}
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Logo & Close Button Area */}
          <div className="flex items-center justify-between px-4 mb-8">
            <div className="flex items-center gap-2">
              <Link to="/">
                <figure className="btn btn-ghost text-xl">
                  <img className="w-[180px]" src={logo} alt="" />
                </figure>
              </Link>
            </div>

            {/* Close Button (Visible on Mobile only) */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <FiX className="w-6 h-6" />
            </label>
          </div>

          {/* Navigation Links */}
          <li className="mb-1">
            <a className="active bg-primary text-white">
              <FiHome className="w-5 h-5" /> Dashboard
            </a>
          </li>
          <li className="mb-1">
            <a>
              <FiPieChart className="w-5 h-5" /> Analytics
            </a>
          </li>
          <li className="mb-1">
            <a>
              <FiUsers className="w-5 h-5" /> Users
            </a>
          </li>
          <li className="mb-1">
            <a>
              <FiSettings className="w-5 h-5" /> Settings
            </a>
          </li>
          <li className="mb-1">
            <NavLink to="/dashboard/myPosts">My Posts</NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/dashboard/myInterests">My Interests</NavLink>
          </li>
          <li className="mb-1">
            <NavLink to="/dashboard/addCrops">Add Crops</NavLink>
          </li>
        </div>

        {/* Bottom Actions */}
        <li>
          <a className="text-error">
            <FiLogOut className="w-5 h-5" /> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-30">
      {/* Mobile Menu Toggle (Open Button) */}
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square btn-ghost drawer-button"
        >
          <FiMenu className="w-6 h-6" />
        </label>
      </div>

      {/* Search Bar */}
      <div className="flex-1 px-2 mx-2">
        <div className="form-control w-full max-w-xs hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full pl-10"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <span className="text-xl font-bold md:hidden">Overview</span>
      </div>

      {/* Right Side Icons */}
      <div className="flex-none gap-4">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FiBell className="w-6 h-6" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};



// --- Main Layout ---

const Dashboard = () => {
  return (
    // NOTE: Remove "lg:drawer-open" if you want the sidebar to be hidden on desktop by default too.
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col bg-base-200 min-h-screen">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
        
<Outlet></Outlet>
          {/* Content Placeholder (Table / Charts) */}
          
        </main>
      </div>

      {/* Sidebar (Drawer Side) */}
      <Sidebar />
    </div>
  );
};

export default Dashboard;
