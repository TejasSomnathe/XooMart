import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-icon">
          <i className="fas fa-sign-in-alt" style={{ color: "#3b6ef8", fontSize: "2rem" }}></i>
        </div>
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Login to manage your store and products.</p>
        <form>
          <label htmlFor="email" className="login-label">
            <i className="fas fa-mobile-alt" style={{ marginRight: "0.5rem" }}></i>Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="login-label">
            <i className="fas fa-lock" style={{ marginRight: "0.5rem" }}></i>Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login-btn"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const response = await axios.post("/api/v1/users/login", { email, password }, { withCredentials: true });
                if (response.data) {
                  alert("Login successful!");
                } else {
                  alert("Login failed: " + response.data.message);
                }
              } catch (error) {
                console.error("Login error:", error);
              }
            }}
          >
            Submit
          </button>
        </form>
        <p className="login-footer">
          Don't have an account?
          <NavLink to="/register" className="login-link"> Sign up</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;