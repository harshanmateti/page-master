import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import MapComponent from './MapComponent';
import WeatherComponent from './WeatherComponent';

function Home() {
    
  return (
    <div id="items">
      <div className="app-container">
        <header className="header">
          <h1>Smart Vehicle Dashboard</h1>
        </header>
        
        <nav className="navbar">
          <ul>
            <li><Link to="/controls">Controls</Link></li>
          </ul>
        </nav>

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
    </div>
  );
}

export default Home;
