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
            Creative Full Stack Developer in love with modern Javascript.  Passionate about creating responsive and easy to use UI’s and writing clean and efficient code.
            Strong background in Graphic Arts & Print Production and extensive experience working with various graphics editors, following brandbooks/styleguides and juggling multiple projects with tight deadlines.

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
