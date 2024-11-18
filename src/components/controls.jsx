import React, { useState } from 'react';
import './controls.css';

function Controls() {
  
  const [leftIndicator, setLeftIndicator] = useState(false);
  const [rightIndicator, setRightIndicator] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [headlights, setHeadlights] = useState(false);

  return (
    <section className="controls-container">
        <h1 className="controls-title">Car Features Control</h1>
        
        <div className="controls-feature">
          <h3 className="feature-title">Indicator Lights</h3>
          <button
            className="feature-button"
            onClick={() => setLeftIndicator(!leftIndicator)}
            data-on={leftIndicator}
          >
            Left Indicator {leftIndicator ? 'On' : 'Off'}
          </button>
          <br></br>
          <button
            className="feature-button"
            onClick={() => setRightIndicator(!rightIndicator)}
            data-on={rightIndicator}
          >
            Right Indicator {rightIndicator ? 'On' : 'Off'}
          </button>
        </div>
        
        <div className="controls-feature">
          <h3 className="feature-title">Air Conditioner</h3>
          <button
            className="feature-button"
            onClick={() => setAirConditioner(!airConditioner)}
            data-on={airConditioner}
          >
            AC {airConditioner ? 'On' : 'Off'}
          </button>
        </div>
        
        <div className="controls-feature">
          <h3 className="feature-title">Headlights</h3>
          <button
            className="feature-button"
            onClick={() => setHeadlights(!headlights)}
            data-on={headlights}
          >
            Headlights {headlights ? 'On' : 'Off'}
          </button>
        </div>
    </section>
  );
}

export default Controls;
