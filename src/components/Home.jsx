import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import MapComponent from './MapComponent';
import WeatherComponent from './WeatherComponent';
import Card from './MusicControl';


const Home = () => {
  return (
    <div className="container">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <h1>Smart Vehicle Dashboard</h1>
        </nav>

        {/* Location Block */}
        <div className="card">
          <div className="icon">📍</div>
          <h3>Location Live</h3>
          <MapComponent />
        </div>

        {/* Weather Block */}
        <div className="card">
          <div className="icon">☀️</div>
          <h3>Weather</h3>
          <WeatherComponent />
        </div>

        {/* Music Player Block */}
        <div className="card">
          <div className="icon">🎵</div>
          <h3>Music Player</h3>
          <p>Play your favorite tunes on the go.</p>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
