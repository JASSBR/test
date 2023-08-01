import React, { useState } from 'react'
import './Login.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Your login form submission logic goes here
      };
  return (
    <div className='Login'>
        <div className="container">

        <span className="logo"></span>
        <h3 className="title">Sign In</h3>
        
        <label htmlFor="username" className='usernameLabel'>Username *</label>
        <input type="text" name="username" id="1"  className="input username" />
        
        <label htmlFor="password" className='passwordLabel'>Password *</label>
        <input type={showPassword ? "text" : "password"} name="password" id="2"  className="input password" />
        <i
            className={`password-toggle ${
              showPassword ? "fa fa-eye-slash" : "fa fa-eye"
            }`}
            onClick={togglePasswordVisibility}
          ></i>
        <button className="button signin">SIGN IN</button>
        <div className="others">
            <span className="forgot">Forgot password?</span>
            <span className="signUp">Don't have an account? Sign Up</span>
        </div>
        </div>
    </div>
  )
}

export default Login