import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from 'react-router-dom';
import './Detail.css'; // Import the CSS file

function Detail() {
  const { user } = useContext(UserContext); // Access user from context

  return (
    <div className="detail-container">
      <div className="sidebar">
        <ul className="sidebar-icons">
          <li>
            <Link to="/home">🏠</Link>
          </li>
          <li>
            <Link to="/controls">🎛️</Link>
          </li>
          <li>
            <Link to="/Detail">🙎🏻‍♂️</Link>
          </li>
        </ul>
      </div>
      <h1>Login Details</h1>
      {user ? (
        <p>Your email: <span>{user.email}</span></p>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}

export default Detail;
