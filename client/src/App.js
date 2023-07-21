import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UsersList users={users} />} />
      <Route path="/users" element={<UsersList users={users} />} />
      <Route path="/users/:userId" element={<UserDetails users={users} />} />
    </Routes>
  );
}

export default App;
