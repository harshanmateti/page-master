// Home.jsx
// import React, { useState } from 'react';
// import './ap.css';

// function Home() {
  
//   const [leftIndicator, setLeftIndicator] = useState(false);
//   const [rightIndicator, setRightIndicator] = useState(false);
//   const [airConditioner, setAirConditioner] = useState(false);
//   const [headlights, setHeadlights] = useState(false);

//   return (
//     <div className="home">
    
//       <h1>Car Features Control</h1>

      
//       <div className="feature">
//         <h3>Indicator Lights</h3>

//         <button onClick={() => setLeftIndicator(!leftIndicator)}>
//           Left Indicator {leftIndicator ? 'On' : 'Off'}
//         </button>
        
//         <button onClick={() => setRightIndicator(!rightIndicator)}>
//           Right Indicator {rightIndicator ? 'On' : 'Off'}
//         </button>
//       </div>

      
//       <div className="feature">
//         <h3>Air Conditioner</h3>
//         <button onClick={() => setAirConditioner(!airConditioner)}>
//           AC {airConditioner ? 'On' : 'Off'}
//         </button>
//       </div>

      
//       <div className="feature">
//         <h3>Headlights</h3>
//         <button onClick={() => setHeadlights(!headlights)}>
//           Headlights {headlights ? 'On' : 'Off'}
//         </button>
//       </div>

    
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import './Home.css';
import MapComponent from './MapComponent';
import WeatherComponent from './WeatherComponent';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Smart Vehicle Dashboard</h1>
      </header>

      {/* Map Section */}
      <section className="section-container">
        <h2>Map</h2>
        <MapComponent />
      </section>

      {/* Weather Section */}
      <section className="section-container">
        <h2>Current Weather</h2>
        <WeatherComponent />
      </section>

      {/* Car Status Section */}
      <section className="section-container car-status">
        <h2>Car Status</h2>
        <div className="car-details">
          <p><strong>Speed:</strong> 128 km/h</p>
          <p><strong>Battery:</strong> 35.5 kWh (Full Capacity)</p>
          <p><strong>Status:</strong> Driving</p>
          <img src="https://via.placeholder.com/200" alt="Car" />
        </div>
      </section>

      {/* Music Section */}
      <section className="section-container music-control">
        <h2>Music Control</h2>
        <div className="music-buttons">
          <button>Rewind</button>
          <button>Play</button>
          <button>Skip</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Smart Vehicle Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
