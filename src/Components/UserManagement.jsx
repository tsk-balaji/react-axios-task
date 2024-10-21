// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addedUser } from "../App";
import { Spinner, Alert, Table } from "react-bootstrap";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const { newUser } = useContext(addedUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers([...response.data, newUser]); // Append the new user to the list
      } catch (error) {
        setError(`Failed to fetch users - ${error}`);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [newUser]);

  return (
    <>
      <Link to="/" className="btn btn-link">
        Home
      </Link>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {user.address?.street}, {user.address?.city},{" "}
                  {user.address?.state}, {user.address?.zip}
                </td>
                <td>{user.company?.name}</td> {/* Access the company name */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
