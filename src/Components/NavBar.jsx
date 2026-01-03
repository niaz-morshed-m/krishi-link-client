import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import logo from "../assets/Casxsxpture-removebg-preview.png"
import Swal from 'sweetalert2';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { TbLogout2 } from 'react-icons/tb';
import { IoMdPersonAdd } from 'react-icons/io';
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineViewGrid,

} from "react-icons/hi";
import { MdOutlineAgriculture } from 'react-icons/md';
import { HiOutlineGlobeEuropeAfrica } from 'react-icons/hi2';
import { LuLeafyGreen } from 'react-icons/lu';
import { FiBell } from 'react-icons/fi';
const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
      
      Swal.fire({
        title: "Do you want to Logout?",
        showDenyButton: true,
         customClass: {
    confirmButton: 'my-confirm-btn',
    denyButton: 'my-deny-btn'
  },
        confirmButtonText: "Yes",
  
      }).then((result) => {
 
        if (result.isConfirmed) {
          Swal.fire("Logged Out Successfully");
           customClass: {
    confirmButton: "swal-ok-btn"
  }
           logout();
           navigate('/')
        } 
      });
     
    };
    const links = (
      <>
        <li>
          <NavLink to="/" className="flex items-center gap-2">
            <HiOutlineHome className="text-xl" />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/allCrops" className="flex items-center gap-2">
            <LuLeafyGreen className="text-xl" />
            All Crops
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex items-center gap-2">
            <HiOutlineInformationCircle className="text-xl" />
            About
          </NavLink>
        </li>

        {user && (
          <li>
            <NavLink to="/dashboard" className="flex items-center gap-2">
              <HiOutlineViewGrid className="text-xl" />
              Dashboard
            </NavLink>
          </li>
        )}
      </>
    );
    return (
      <div className="sticky top-0 left-0 w-full z-50 navbar bg-base-100/50 backdrop-blur-md border border-white/20 shadow-sm rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="/">
            {" "}
            <figure className="btn btn-ghost text-xl">
              <img className="w-[180px]" src={logo} alt="" />
            </figure>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="flex-none gap-4">
              <div className="dropdown dropdown-end mx-3">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User" src={user && user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <Link to='/profile'>
                    {" "}
                    <li>
                      <span>Profile</span>
                    </li>
                  </Link>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn bg-primary btn-sm md:btn-sm lg:btn-md"
                    >
                      <TbLogout2 /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="flex gap-2.5">
            {!user && (
              <>
                <Link to="/register">
                  <button className="btn bg-primary btn-sm md:btn-md lg:btn-md flex items-center gap-1">
                    <IoMdPersonAdd /> Register
                  </button>
                </Link>

                <Link to="/login">
                  <button className="btn bg-primary btn-sm md:btn-md lg:btn-md flex items-center gap-1">
                    <BiLogIn /> Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default NavBar;