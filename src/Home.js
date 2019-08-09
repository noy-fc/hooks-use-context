import React, { useContext, useState } from "react";
import { UserContext, AlertContext } from "./hooks";

const Home = function() {
  const { showUserAlert, user, setUser } = useContext(UserContext);
  const { showAlert } = useContext(AlertContext);
  const [value, setValue] = useState("hello");
  return (
    <div>
      <h1 onClick={() => setUser(Date.now())}>Home</h1>

      <input value={user} type="text" onChange={e => setUser(e.target.value)} />
      <button onClick={() => showUserAlert()}>Show Alert User</button>

      <br />
      <br />
      <input
        value={value}
        type="text"
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => showAlert(value)}>Show Input</button>
      <p>User : {user}</p>
    </div>
  );
};

export default Home;
