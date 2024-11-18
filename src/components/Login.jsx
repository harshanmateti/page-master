// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";
import './ap.css'; // Updated CSS file name
import car from './car.jpg';

function Login({ setAuthenticated, setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (response.data.status === "authenticated") {
        setAuthenticated(true);
        setUser(response.data.user);
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Error logging in");
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
        <br></br>
        <Link to="/forgot-password" className="login-link">Forgot Password?</Link>
      </form>
    </div>
  );
}

export default Login;
