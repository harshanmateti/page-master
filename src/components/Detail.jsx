import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import './Detail.css'; // Import the CSS file

function Detail() {
  const { user } = useContext(UserContext); // Access user from context

  return (
    <div className="detail-container">
      <h1>Welcome </h1>
      {user ? (
        <p>Your email: <span>{user.email}</span></p>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}

export default Detail;
