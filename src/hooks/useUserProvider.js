import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const showUserAlert = () => {
    alert(user);
  };

  return (
    <UserContext.Provider value={{ showUserAlert, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
