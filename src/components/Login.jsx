import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext"; // Import UserContext
import './ap.css'; 
import car from './car.jpg';

function Login({ setAuthenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext); // Access setUser from context

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      console.log("Response:", response.data); // Debugging response

      if (response.data.status === "authenticated") {
        setAuthenticated(true);
        setUser({ email: response.data.user.email }); // Store email in context
        console.log("User set to:", response.data.user.email); // Debugging user context
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Error logging in");
      console.error("Login error:", error); // Log error
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submit}>
        <img src={car} alt="Car" className="login-image" />
        <h1 className="login-title">Login</h1>
        <input
          className="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input type="submit" className="login-submit" value="Login" />
        {error && <div className="login-error">{error}</div>}
        <p className="login-text">Don't have an account?</p>
        <Link to="/signup" className="login-link">Register</Link>
        <br />
        <Link to="/forgot-password" className="login-link">Forgot Password?</Link>
      </form>
    </div>
  );
}

export default Login;
