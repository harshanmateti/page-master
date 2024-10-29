import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import './ap.css';
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
    <div className="login">
      <form action="POST" className="form">
        <img src={car} alt="Car" style={{ width: '100px', height: 'auto' }} />
        <h1>Signup</h1>
        <input
          className="user"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          className="pass"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <PasswordStrengthMeter password={password} /> {/* Password Strength Meter */}
        <br />
        <br />
        <input type="submit" onClick={submit} />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <br />
        <br />
        <Link to="/">Login Page</Link>
      </form>
    </div>
  );
}

export default Signup;
