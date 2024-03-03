import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading,setLoading]=  useState(true)


  // create user

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut =()=>{
    setLoading(true)

      return signOut(auth)


  }

  // observe auth state change

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    
      setUser(currentUser);
      console.log("observing this user", currentUser);
      setLoading(false)
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, signInUser ,logOut, loading};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
