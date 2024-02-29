import React, { createContext } from "react";

export const AuthCotext = createContext(null);
const AuthProvider = ({ children }) => {
  const authInfo = { name: "amr context" };
  return <AuthCotext.Provider value={authInfo}>{children}</AuthCotext.Provider>;
};

export default AuthProvider;
