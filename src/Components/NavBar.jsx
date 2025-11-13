import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import logo from "../assets/Casxsxpture-removebg-preview.png"
const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
      logout();
    };
    const links = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/allCrops">All Crops</NavLink>
        </li>
        {user && (
            <>
            <li>
            <NavLink to="/myPosts">My Posts</NavLink>
          </li>
            <li>
            <NavLink to="/myInterests">My Interests</NavLink>
          </li>
            <li>
            <NavLink to="/addCrops">Add Crops</NavLink>
          </li>
          </>
          
        )}
      </>
    );
    return (
      <div className="navbar bg-base-100 shadow-sm">
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
            <Link to="/profile">
              <div className="avatar relative group m-4">
                <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                  <img src={user && user.photoURL} alt="User profile avatar" />
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {user.displayName || "No Name"}
                  </div>
                </div>
              </div>
            </Link>
          )}
          {user ? (
            <button onClick={handleLogout} className="btn bg-[#27e46677]">
              Logout
            </button>
          ) : (
            <div>
              <NavLink to="/register">
                <button className="btn bg-primary">Register</button>
              </NavLink>
              <NavLink to="/login">
                <button className="btn bg-primary">Login</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    );
};

export default NavBar;