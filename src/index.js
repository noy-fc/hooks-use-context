import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import ContextProvider from "./hooks/state";
const App = function() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
