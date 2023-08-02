import React, { useState } from "react";
import "./UserEdit.css"
import Snackbar from "./SnackBar";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://localhost:7155/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSnackbarMessage('user added by succes');
      setShowSnackbar(true);    
      navigate("/userList");
    } catch (error) {
      console.error("Error creating user:", error);
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
      <h1 className="title">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input className="input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input className="input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
