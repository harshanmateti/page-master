// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { UserContext } from "./UserContext"; // Import UserContext
// import './ap.css'; 
// import car from './car.jpg';

// function Login({ setAuthenticated }) {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const { setUser } = useContext(UserContext); // Access setUser from context

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8000/login", {
//         email,
//         password,
//       });

//       console.log("Response:", response.data); // Debugging response

//       if (response.data.status === "authenticated") {
//         setAuthenticated(true);
//         setUser({ email: response.data.user.email }); // Store email in context
//         console.log("User set to:", response.data.user.email); // Debugging user context
//         navigate("/home");
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (error) {
//       setError("Error logging in");
//       console.error("Login error:", error); // Log error
//     }
//   }

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={submit}>
//         <img src={car} alt="Car" className="login-image" />
//         <h1 className="login-title">Login</h1>
//         <input
//           className="login-email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           className="login-password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <input type="submit" className="login-submit" value="Login" />
//         {error && <div className="login-error">{error}</div>}
//         <p className="login-text">Don't have an account?</p>
//         <Link to="/signup" className="login-link">Register</Link>
//         <br />
//         <Link to="/forgot-password" className="login-link">Forgot Password?</Link>
//       </form>
//     </div>
//   );
// }

// export default Login;
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import './ap.css'; // Your CSS file
import car from './car.jpg';


function Login({ setAuthenticated }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (response.data.status === "authenticated") {
        setAuthenticated(true);
        setUser({ email: response.data.user.email });
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Error logging in");
      console.error("Login error:", error);
    }
  }

  return (
    <div className="form-container">
      <h1 className="title">Welcome Back</h1>
      <form className="form" onSubmit={submit}>
        <img src={car} alt="Car" className="login-image" />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="form-btn">Login</button>
        {error && <div className="login-error">{error}</div>}
      </form>
      <p className="sign-up-label">
        Don't have an account?{" "}
        <Link to="/signup" className="sign-up-link">Register</Link>
      </p>
      <p className="sign-up-label">
        <Link to="/forgot-password" className="page-link-label">Forgot Password?</Link>
      </p>
      <div className="buttons-container">
        {/* <button className="apple-login-button">
          <span className="apple-icon"></span> Sign in with Apple
        </button> */}
        {/* <button className="google-login-button">
          <span className="google-icon">G</span> Sign in with Google
        </button> */}
      </div>
    </div>
    
  );
}

export default Login;
