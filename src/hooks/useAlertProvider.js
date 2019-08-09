import React, { createContext } from "react";

export const AlertContext = createContext();

const showAlert = message => {
  alert(message);
};
export const AlertProvider = ({ children }) => {
  return (
    <AlertContext.Provider
      value={{
        showAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
