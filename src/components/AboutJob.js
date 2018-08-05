import React from 'react';

const JobComponent = props => {
  const job = props.job;
  return (
    <div className="job">
      <h3 className="job-title">{job.title}</h3>
      <div className="job-company-row">
        <span className="jc-name">{job.companyName}</span>
        <span className="jc-dates">{job.dates}</span>
      </div>
      <p className="job-description">{job.description}</p>
    </div>
  );
};

export default JobComponent;
