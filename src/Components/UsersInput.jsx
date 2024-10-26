// UsersInput.jsx
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function UserInput() {
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize navigate
  const [newUser, setNewUser] = useState({
    id: users.length + 1, // Ensure unique ID
    name: "",
    username: "",
    email: "",
    phone: "",
    address: { street: "", city: "", state: "", zip: "" },
    website: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]); // Append new user to users list
    alert("User Added Successfully!");

    setNewUser({
      id: users.length + 1,
      name: "",
      username: "",
      email: "",
      phone: "",
      address: { street: "", city: "", state: "", zip: "" },
      website: "",
      company: "",
    });

    navigate("/UserManagement"); // Navigate to UserManagement
  };

  return (
    <div className="container">
      <div className="header d-flex justify-content-between align-items-center mt-0">
        <h2 className="my-4 text-center" style={{ color: "#4A4A4A" }}>
          User Management
        </h2>
        <Link
          to="/UserManagement"
          className="btn btn-sm btn-primary" // Change to a colorful button
          style={{
            display: "flex", // Use flex to help center content
            alignItems: "center", // Center vertically
            justifyContent: "center", // Center horizontally
            marginLeft: "20px", // Add margin for spacing
          }}
        >
          Manage Users
        </Link>
      </div>
      <div>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"
              value={newUser.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              name="username"
              value={newUser.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputStreet" className="form-label">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              id="inputStreet"
              name="street"
              value={newUser.address.street}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={newUser.address.city}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="inputState"
              name="state"
              value={newUser.address.state}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
              value={newUser.address.zip}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputWebsite" className="form-label">
              Website
            </label>
            <input
              type="text"
              className="form-control"
              id="inputWebsite"
              name="website"
              value={newUser.website}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCompany" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany"
              name="company"
              value={newUser.company}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-3">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
