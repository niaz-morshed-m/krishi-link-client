import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import AllCrops from './Pages/AllCrops.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import MyPosts from './Pages/MyPosts.jsx';
import MyInterests from './Pages/MyInterests.jsx';
import AddCrops from './Pages/AddCrops.jsx';
import CropDetails from './Pages/CropDetails.jsx';
import PrivateRoute1 from './Provider/PrivateRoute1.jsx';
import PrivateRoute2 from './Provider/PrivateRoute2.jsx';
import PrivateRoute3 from './Provider/PrivateRoute3.jsx';
import PrivateRoute4 from './Provider/PrivateRoute4.jsx';
import Profile from './Pages/Profile.jsx';
import PrivateRoute5 from './Provider/PrivateRoute5.jsx';
import { MdErrorOutline } from 'react-icons/md';
import Dashboard from './dashboard/Dashboard.jsx';
import DashboardHome from './dashboard/DashboardHome.jsx';
import About from './Pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,

        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/allCrops",
        element: <AllCrops></AllCrops>,
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },

      {
        path: "/details/:id",
        element: <CropDetails></CropDetails>,
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute5>
            {" "}
            <Profile></Profile>
          </PrivateRoute5>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },{
        path:"/about",
        element:<About></About>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/myPosts",
        element: (
          <PrivateRoute2>
            <MyPosts></MyPosts>
          </PrivateRoute2>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-40">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/dashboard/myInterests",
        element: (
          <PrivateRoute4>
            <MyInterests></MyInterests>
          </PrivateRoute4>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/dashboard/addCrops",
        element: (
          <PrivateRoute3>
            <AddCrops></AddCrops>
          </PrivateRoute3>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center gap-2 text-center mx-auto m-20">
        <MdErrorOutline />{" "}
        <span>Error-404: Currently This Page is not Available</span>
      </div>
    ),
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
