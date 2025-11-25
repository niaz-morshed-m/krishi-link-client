import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser]=useState(null)
  const [loading, setLoading] = useState(true)
  const registerWithEmail = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password);
  }

 const logout = () => {
   setLoading(true);
   return signOut(auth);
 };

const googleLogin = ()=>{
 return signInWithPopup(auth, provider);
}

 const updateUser = (Obj)=>{
  return  updateProfile(auth.currentUser, Obj)
  }

const profileUpdate = (name, url)=>{
   return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
}

const signIn = (email, password)=>{
 return signInWithEmailAndPassword(auth, email, password)
}

useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return () => {
    unSubscribe();
  };
}, []);

  const authData = {
    registerWithEmail,
    user,
    logout,
    googleLogin,
    profileUpdate,
    signIn,
    loading,
    updateUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;