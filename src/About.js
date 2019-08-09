import React, { useContext } from "react";
import { UserContext } from "./hooks";

export default function() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <hr />
      {user}
    </div>
  );
}
