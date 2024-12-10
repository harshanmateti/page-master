// // export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import axios from "axios";
// import Controls from "./components/controls";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import ForgotPassword from "./components/ForgotPassword";
// import ResetPassword from "./components/ResetPassword";
// import Detail from "./components/Detail";
// import Cars from "./components/cont";

// function App() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/authenticated", {
//           headers: { Authorization: user ? user.token : null } // Pass the token if available
//         });
//         if (response.data.status === "authenticated") {
//           setAuthenticated(true);
//           setUser(response.data.user);
//         } else {
//           setAuthenticated(false);
//           setUser(null);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     checkAuth();
//   }, [user]);

//   const PrivateRoute = ({ children }) => {
//     if (!authenticated) {
//       return <Navigate to="/" />;
//     }
//     return children;
//   };

//   return (
//     <div className="App">
//       <Router>
//         <Routes>

//           <Route path="/" element={<Login setAuthenticated={setAuthenticated} setUser={setUser} />} />
//           <Route path="/signup" element={<Signup setAuthenticated={setAuthenticated} setUser={setUser} />} />
//           <Route path="/home" element={<PrivateRoute><Home user={user} /></PrivateRoute>} />
//           <Route path="/controls" element={<PrivateRoute> <Controls /> </PrivateRoute>} />
//           <Route path="/Detail" element={<PrivateRoute> <Detail /> </PrivateRoute>} />  
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Controls from "./components/controls";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Detail from "./components/Detail";
import Cont from "./components/Moral/cont.js";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:8000/authenticated", {
          headers: { Authorization: user ? user.token : null }, // Pass the token if available
        });
        if (response.data.status === "authenticated") {
          setAuthenticated(true);
          setUser(response.data.user);
        } else {
          setAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, [user]);

  const PrivateRoute = ({ children }) => {
    if (!authenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default route to Cars */}
          <Route path="/" element={<Cont />} />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} setUser={setUser} />} />
          <Route path="/signup" element={<Signup setAuthenticated={setAuthenticated} setUser={setUser} />} />
          <Route path="/home" element={<PrivateRoute><Home user={user} /></PrivateRoute>} />
          <Route path="/controls" element={<PrivateRoute><Controls /></PrivateRoute>} />
          <Route path="/detail" element={<PrivateRoute><Detail /></PrivateRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

