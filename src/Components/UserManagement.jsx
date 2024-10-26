// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { Spinner, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserManagement.css"; // Import custom CSS for scrollbar visibility

export default function UserManagement() {
  const { users, setUsers } = useContext(UserContext);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this user of User Id : ${id}`
    );
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleUpdate = (id) => {
    const updatedName = prompt("Update Name");
    if (updatedName) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, name: updatedName } : user
        )
      );
    }

    const updatedEmail = prompt("Update Email");
    if (updatedEmail) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, email: updatedEmail } : user
        )
      );
    }

    const updatedUserName = prompt("Update Username");
    if (updatedUserName) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, username: updatedUserName } : user
        )
      );
    }

    const updatedPhone = prompt("Update Phone");
    if (updatedPhone) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, phone: updatedPhone } : user
        )
      );
    }

    const updatedStreet = prompt("Update Street");
    const updatedCity = prompt("Update City");
    const updatedState = prompt("Update State");
    const updatedZip = prompt("Update Zip");
    if (updatedStreet || updatedCity || updatedState || updatedZip) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id
            ? {
                ...user,
                address: {
                  street: updatedStreet || user.address.street,
                  city: updatedCity || user.address.city,
                  state: updatedState || user.address.state,
                  zip: updatedZip || user.address.zip,
                },
              }
            : user
        )
      );
    }

    const updatedWebsite = prompt("Update Website");
    if (updatedWebsite) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, website: updatedWebsite } : user
        )
      );
    }

    const updatedCompany = prompt("Update Company");
    if (updatedCompany) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, company: updatedCompany } : user
        )
      );
    }
  };

  return (
    <div className="container small-padding">
      <h2 className="my-4 text-center" style={{ color: "#4A4A4A" }}>
        User Management
      </h2>
      <Link to="/" className="btn btn-outline-primary mb-3">
        Home
      </Link>
      {users.length === 0 ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="table-container">
          <Table striped bordered hover className="shadow-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Company</th>
                <th>Website</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    {user.address?.street}, {user.address?.city},{" "}
                    {user.address?.state}, {user.address?.zip}
                  </td>
                  <td>{user.company?.name || user.company}</td>
                  <td>{user.website?.name || user.website}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <Button
                        className="m-2"
                        variant="warning"
                        onClick={() => handleUpdate(user.id)}
                      >
                        Update
                      </Button>
                      <Button
                        className="m-2"
                        variant="danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}
