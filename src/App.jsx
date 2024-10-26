// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import UserInput from "./Components/UsersInput";
import UserManagement from "./Components/UserManagement";

export const UserContext = React.createContext(null);

function App() {
  const [users, setUsers] = useState([]);

  // Fetch initial users from the API when App loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <Routes>
        <Route path="/" element={<UserInput />} />
        <Route path="/UserManagement" element={<UserManagement />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
