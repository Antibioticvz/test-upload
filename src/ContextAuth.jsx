import React, { useState, createContext } from "react";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    !!localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
  );

  const contextValue = {
    auth,
    setAuth,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
