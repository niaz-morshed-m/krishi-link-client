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
        path: "/myPosts",
        element: (
          <PrivateRoute2>
            <MyPosts></MyPosts>
          </PrivateRoute2>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "myInterests",
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
        path: "/addCrops",
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
      {
        path: "/details/:id",
        element: (
          <PrivateRoute1>
            <CropDetails></CropDetails>
          </PrivateRoute1>
        ),
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
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
