import React from "react";

import { ProviderComposer } from "./providerComposer";
import { RouteProvider, AlertProvider, UserProvider } from "./index";

const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer
      contexts={[<RouteProvider />, <AlertProvider />, <UserProvider />]}
    >
      {children}
    </ProviderComposer>
  );
};

export default ContextProvider;
