import React from 'react';
import aboutImage from './images/img-2.jpg';

function About() {
  return (
    <section id="about">
      <div className="about container-about">
        <div className="col-left">
          <div className="about-img">
            <img src={aboutImage} alt="About" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About the <span>Project</span></h1>
          <p>
            This project focuses on integrating voice automation in cars, enabling seamless control over essential functions like indicators, horn, navigation, weather updates, and music streaming. By enhancing convenience and safety, the system minimizes driver distractions, promotes hands-free operation, and leverages AI technology for an intuitive and futuristic driving experience.
          </p>
          <a href="#hero" className="cta">Go back to Home</a>
        </div>
      </div>
    </section>
  );
}

export default About;