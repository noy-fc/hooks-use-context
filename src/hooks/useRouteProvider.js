import React, { createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  return (
    <Router>
      <Route>
        {props => (
          <RouteContext.Provider value={props}>
            {children}
          </RouteContext.Provider>
        )}
      </Route>
    </Router>
  );
};
