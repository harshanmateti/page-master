import React from 'react';
import { Link } from 'react-router-dom';
import './controls.css';

const Esp32 = () => {
    const handleRelayAction = async (id, action) => {
        try {
            const response = await fetch(`http://localhost:8000/relay/${id}/${action}`);
            const result = await response.text();
            console.log(result);
            alert(result); // Show ESP32's response
        } catch (error) {
            console.error('Error communicating with the backend:', error);
        }
    };

    return (
        <div className="esp32-wrapper">
            <div className="sidebar">
                <ul className="sidebar-icons">
                    <li>
                        <Link to="/home">🏠</Link>
                    </li>
                    <li>
                      <Link to="/controls">🎛️</Link>
                    </li>
                    <li>
                        <Link to="/Detail">🙎🏻‍♂</Link>
                    </li>
                    {/* Uncomment this if needed */}
                    {/* <li>
                        <Link to="/ESPControl">🎛</Link>
                    </li> */}
                </ul>
            </div>
            <div className="relay-control">
                <h1>Relay Control</h1>
                <button onClick={() => handleRelayAction(1, 'toggle')}>LEFT ON </button>
                <button onClick={() => handleRelayAction(-1, 'toggle')}>LEFT OFF </button>
                <button onClick={() => handleRelayAction(2, 'toggle')}>RIGHT ON </button>
                <button onClick={() => handleRelayAction(-2, 'toggle')}>RIGHT OFF </button>
                <button onClick={() => handleRelayAction(3, 'toggle')}>HORN ON </button>
                <button onClick={() => handleRelayAction(-3, 'toggle')}>HORN OFF</button>
            </div>
        </div>
    );
};

export default Esp32;