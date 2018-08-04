import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons';

const Home = () => (
  <main id="home">
    <h1 className="lg-heading">Nick <span className="text-secondary">Shmyrev</span></h1>
    <h2 className="sm-heading">Front-End Developer | JavaScript Enthusiast & Just A Nice Person</h2>
    
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/nickshmyrev/" target="_blank" rel="noopener noreferrer" className="icons">
        <FontAwesomeIcon icon={faLinkedin} className="fa-2x"/>
      </a>
      <a href="https://gitlab.com/nick-shmyrev" target="_blank" rel="noopener noreferrer" className="icons">
        <FontAwesomeIcon icon={faGitlab} className="fa-2x"/>
      </a>
      <a href="https://github.com/nick-shmyrev" target="_blank" rel="noopener noreferrer" className="icons">
        <FontAwesomeIcon icon={faGithub} className="fa-2x"/>
      </a>
    </div>
  </main>
);

export default Home;
