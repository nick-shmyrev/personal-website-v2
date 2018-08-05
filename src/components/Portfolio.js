import React from 'react';
import uuid from 'uuid/v4';

import data from '../data/data';
import PortfolioProject from './PortfolioProject';

const Portfolio = () => (
  <main id="portfolio">
    <h1 className="lg-heading">My <span className="text-secondary">Work</span></h1>
    <h2 className="sm-heading">Check out some of my projects...</h2>
    <div className="projects">
      {data.projects.map(project => (
        <PortfolioProject project={project} key={uuid()}/>
      ))}
    </div>
    
  </main>
);

export default Portfolio;
