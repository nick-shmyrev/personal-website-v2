import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const PortfolioProject = (props) => {
  const { project } = props;
  return (
    <div className="project-item">
      <a href={project.url ? project.url : '#'} className="project-image" target="_blank">
        <img src={project.img} alt={project.name}/>
        <span className="overlay">
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </span>
      </a>
      <a href={project.git ? project.git : '#'} className="btn btn-dark" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="fab"/> GitHub
      </a>
    </div>
  );
};

export default PortfolioProject;
