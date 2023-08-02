import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import "./UserEdit.css"
import Snackbar from "./SnackBar";
const UserEdit = () => {
  const { id } = useParams();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  console.log(id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    const response = await fetch(`https://localhost:7155/api/users/${id}`);
    const data = await response.json();
    setName(data.name);
    setEmail(data.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email };

    const response = await fetch(`https://localhost:7155/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
        setSnackbarMessage('user added by succes');
    setShowSnackbar(true);
    }
  };


  const hideSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div>
        {showSnackbar && (
        <Snackbar message={snackbarMessage} onClose={hideSnackbar} />
      )}
      <h1 className="title">Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit">Save</button>
      </form>
    </div>
  );
};

export default UserEdit;
