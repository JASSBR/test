import React, { useState } from 'react'
import './Login.css'
import { faEye , faEyeSlash , faLock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const [showPassword, setShowPassword] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log("User authenticated with ID:", data.UserId);
              // Redirect or perform other actions on successful login
            } else {
              console.log("Authentication failed");
            }
          } catch (error) {
            console.error("Error during login:", error);
          }
        
      };
  return (
    <div className='Login'>
        <div className="container">
        
        <FontAwesomeIcon
        icon={faLock} className='logo'></FontAwesomeIcon>
        <h3 className="title">Sign In</h3>
        
        <label htmlFor="username" className='Label'>Username *</label>
        <input 
        type="text"
        value={formData.email}
         onChange={handleChange}
         name="username"
        id="1"
        className="input username" 
        />
        
       
        <label htmlFor="password" className='passwordLabel'>Password *</label>
        <div className="password-input">
            <input 
        type={showPassword ? "text" : "password"} 
        value={formData.password} 
        onChange={handleChange} 
        name="password" 
        id="2"  
        className='input'
        />
        <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className='password-toggle'
            onClick={togglePasswordVisibility}
          ></FontAwesomeIcon>
        </div>
        
        <button className="button signin" onClick={handleSubmit}>SIGN IN</button>
        <div className="others">
            <span className="forgot">Forgot password?</span>
            <span className="signUp">Don't have an account? Sign Up</span>
        </div>
        </div>
    </div>
  )
}

export default Login