// Home.jsx
import React, { useState } from 'react';
import './ap.css';

function Home() {
  
  const [leftIndicator, setLeftIndicator] = useState(false);
  const [rightIndicator, setRightIndicator] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [headlights, setHeadlights] = useState(false);

  return (
    <div className="home">
    
      <h1>Car Features Control</h1>

      
      <div className="feature">
        <h3>Indicator Lights</h3>

        <button onClick={() => setLeftIndicator(!leftIndicator)}>
          Left Indicator {leftIndicator ? 'On' : 'Off'}
        </button>
        
        <button onClick={() => setRightIndicator(!rightIndicator)}>
          Right Indicator {rightIndicator ? 'On' : 'Off'}
        </button>
      </div>

      
      <div className="feature">
        <h3>Air Conditioner</h3>
        <button onClick={() => setAirConditioner(!airConditioner)}>
          AC {airConditioner ? 'On' : 'Off'}
        </button>
      </div>

      
      <div className="feature">
        <h3>Headlights</h3>
        <button onClick={() => setHeadlights(!headlights)}>
          Headlights {headlights ? 'On' : 'Off'}
        </button>
      </div>

    
    </div>
  );
}

export default Home;