import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import "./UserList.css"
import Snackbar from "./SnackBar";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);



  const fetchUsers = async () => {
    try {
      const response = await fetch("https://localhost:7155/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await fetch(`https://localhost:7155/api/users/${id}`, {
        method: "DELETE",
      });
      setSnackbarMessage('user deleted successfuly');
      setShowSnackbar(true);
      fetchUsers(); 
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const hideSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div className="userList">
      {showSnackbar && (
        <Snackbar message={snackbarMessage} onClose={hideSnackbar} />
      )}
    <div className="container">
      <Table striped responsive="xl">
        <thead>
          <tr>
            <th >Username</th>
            <th >Email</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td >{user.name}</td>
              <td >{user.email}</td>
              <td >
                <div className="actions">
                  <Link to={`/userEdit/${user.id}`} className="update-button">Edit</Link>
                <Button onClick={() => handleDeleteUser(user.id)} className="button-delete">Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to={`/userForm`} className="create-button">Create New User</Link>
    </div>
    </div>
  );
};

export default UserList;
