import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const PortfolioProject = (props) => {
  const project = props.project;
  return (
    <div className="project">
      <a href={project.url ? project.url : '#'} target="_blank">
        <img src={project.img} alt={project.name}/>
      </a>
      <a href={project.url ? project.url : '#'} className="btn btn-light" target="_blank">
        <FontAwesomeIcon icon={faEye} className="fab"/> {project.name}
      </a>
      <a href={project.git ? project.git : '#'} className="btn btn-dark" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="fab"/> GitHub
      </a>
    </div>
  );
};

export default PortfolioProject;
