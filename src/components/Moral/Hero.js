import React from 'react';
import carAutomationBg from './images/car_automation.jpg';

function Hero() {
  return (
    <section id="hero" style={{ backgroundImage: `url(${carAutomationBg})` }}>
      <div className="hero container">
        <div>
          <h1>Vehicle(Car)<span></span></h1>
          <h1>Automation System</h1>
          <h1>Voice Controlled<span></span></h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;