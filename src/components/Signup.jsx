import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import './signup.css';
import car from './car.jpg';

function Signup({ setAuthenticated, setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });

      if (response.data.status === "created") {
        setAuthenticated(true);
        setUser(response.data.user);
        navigate("/home");
      } else {
        setError("User already exists");
      }
    } catch (error) {
      setError("Error signing up");
    }
  }

  return (
    <div className="signup-container">
      <form action="POST" className="signup-form">
        <img src={car} alt="Car" className="signup-image" />
        <h1 className="signup-title">Signup</h1>
        <input
          className="signup-input email-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          className="signup-input password-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <PasswordStrengthMeter password={password} /> {/* Password Strength Meter */}
        <br />
        <br />
        <input type="submit" onClick={submit} className="signup-submit" />
        {error && <div className="signup-error">{error}</div>}
        <br />
        <br />
        <Link to="/" className="signup-link">Login Page</Link>
      </form>
    </div>
  );
}

export default Signup;
