import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserInput from "./Components/UsersInput";
import UserManagement from "./Components/UserManagement";

export const addedUser = React.createContext(null);

function App() {
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    website: "",
    company: "",
  });

  return (
    <addedUser.Provider value={{ newUser, setNewUser }}>
      <Routes>
        <Route path="/" element={<UserInput />} />
        <Route path="/UserManagement" element={<UserManagement />} />
      </Routes>
    </addedUser.Provider>
  );
}

export default App;
