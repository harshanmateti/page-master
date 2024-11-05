// ResetPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams(); // Get the reset token from the URL
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    try {
      // Send token and new password to backend
      const response = await axios.post(`http://localhost:8000/reset-password/${token}`, { newPassword: password });

      if (response.data.status === "password-reset-success") {
        setMessage("Password has been reset successfully.");
        setTimeout(() => navigate("/"), 3000); // Redirect to login after success
      } else {
        setMessage("Error resetting password. Please ensure your token is valid and try again.");
      }
    } catch (error) {
      setMessage("Error resetting password.");
    }
  };

  return (
    <div className="reset-password">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default ResetPassword;
