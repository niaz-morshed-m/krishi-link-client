import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute1 = ({children}) => {



    const {user, loading} =useContext(AuthContext)

if (loading) {
  return (
    <div className="flex justify-center p-5 m-3">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
}

console.log("Loading:", loading, "User:", user);
if (user && user?.email) {
  return children;
}
return <Navigate to="/login"></Navigate>

};

export default PrivateRoute1;