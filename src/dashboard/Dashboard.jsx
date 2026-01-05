import React, { useContext } from "react";
import {
  FiMenu,
  FiX,
  FiLogOut,
  FiFileText,
  FiHeart,
  FiPlusCircle,
} from "react-icons/fi";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import logo from "../assets/Casxsxpture-removebg-preview.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { TbLogout2 } from "react-icons/tb";

/* ---------------- Sidebar ---------------- */
const Sidebar = () => {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition ${
      isActive ? "bg-primary text-white" : "hover:bg-base-300"
    }`;

  return (
    <div className="drawer-side z-40">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

      <ul className="menu p-4 w-80 min-h-full bg-base-200 flex flex-col justify-between">
        {/* Top */}
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <img src={logo} className="w-[180px]" alt="Logo" />
            </Link>

            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <FiX size={22} />
            </label>
          </div>

          {/* Nav Links */}
          <li className="mb-1">
            {/* 👇 end is IMPORTANT */}
            <NavLink to="/dashboard" end className={navClass}>
              <FiFileText size={18} />
              My Posts
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink to="/dashboard/myInterests" className={navClass}>
              <FiHeart size={18} />
              My Interests
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink to="/dashboard/addCrops" className={navClass}>
              <FiPlusCircle size={18} />
              Add Crops
            </NavLink>
          </li>
        </div>

        {/* Logout (optional static) */}
        <li className="text-error px-4 py-2 flex items-center gap-3">
          <FiLogOut size={18} />
          Logout
        </li>
      </ul>
    </div>
  );
};

/* ---------------- Navbar ---------------- */
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire("Logged Out Successfully");
        navigate("/");
      }
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-30">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-ghost btn-square">
          <FiMenu size={22} />
        </label>
      </div>

      <div className="flex-1 px-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL} alt="User" />
          </div>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-primary btn-sm mt-2"
            >
              <TbLogout2 /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

/* ---------------- Layout ---------------- */
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen bg-base-200">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <Sidebar />
    </div>
  );
};

export default Dashboard;
