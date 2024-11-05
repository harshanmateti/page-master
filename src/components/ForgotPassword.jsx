// ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./Forgot.css"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.status === "reset-link-sent") {
        setMessage("Reset link sent! Check your email.");
        setTimeout(() => navigate("/login"), 3000);
      } else if (data.status === "invalid-email") {
        setMessage("Email not found. Please check and try again.");
      } else {
        setMessage("Failed to send reset link. Please try again later.");
      }
    } catch (error) {
      setMessage("An error occurred while sending the reset link.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Link</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ForgotPassword;
