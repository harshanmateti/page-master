import React from 'react';
import carControls from './images/carControls.jpg';
import mapComponent from './images/mapComponent.avif';
import weatherComponent from './images/weather.jpg';
import spotifyImage from './images/spotify.jpg';

function Projects() {
  const projectData = [
    {
      title: 'Car Controls',
      description: 'In a voice-enabled car, drivers can control the indicators and horn using simple voice commands, offering hands-free convenience and improving focus on the road for a safer driving experience.',
      image: carControls
    },
    {
      title: 'Map',
      description: 'A voice-automated car\'s map feature allows drivers to get real-time navigation updates. It enhances convenience, safety, and efficiency.',
      image: mapComponent
    },
    {
      title: 'Weather',
      description: 'The weather feature in a voice-automated car provides real-time updates on conditions like temperature, rain, or snow. Drivers can look for forecasts, plan routes, and ensure safety, all hands-free.',
      image: weatherComponent
    },
    {
      title: 'Spotify',
      description: 'The Spotify feature in a voice-automated car allows drivers to play, pause, skip. It ensures a seamless music experience on the road.',
      image: spotifyImage
    }
  ];

  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title"><span>Features</span></h1>
        </div>
        <div className="all-projects">
          {projectData.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-info">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;