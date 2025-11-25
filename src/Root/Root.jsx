import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
     const navigation = useNavigation();
     const isLoading = navigation.state === "loading";
    return (
      <div>
        <NavBar></NavBar>
        {isLoading ? (
          <div className="flex justify-center p-5 m-3">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ) : (
          <Outlet />
        )} 
        <Footer></Footer>
      </div>
    );
};

export default Root;