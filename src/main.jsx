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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path:'/allCrops',
        element: <AllCrops></AllCrops>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/myPosts",
        element: <MyPosts></MyPosts>
      },
      {
        path:"myInterests",
        element:<MyInterests></MyInterests>
      },
      {
        path: "/addCrops",
        element:<AddCrops></AddCrops>
      },
      {
        path: "/details/:id",
        element:<CropDetails></CropDetails>
      }
    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
