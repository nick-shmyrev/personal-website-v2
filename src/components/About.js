import React from 'react';
import uuid from 'uuid/v4';

import data from '../data/data';
import AboutJob from './AboutJob';

const About = () => {
  const state = { jobs: data.jobs };
  return (
    <main id="about">
      <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
      <h2 className="sm-heading">A few things about me...</h2>
    
      <div className="about-info">
        <img src="../img/avatar.jpeg" alt="Nick Shmyrev" className="bio-image"/>
        <div className="bio">
          <h3 className="text-secondary">Summary</h3>
          <p>
            Web Developer focusing on Front-End Development. Well versed in several programming languages including JavaScript and PHP, SQL and NoSQL databases, and front-end frameworks including React and Vue.js.
          </p>
        </div>
        {state.jobs.map(job => (
          <AboutJob job={job} key={uuid()}/>
        ))}
      </div>
    </main>
  );
};

export default About;
