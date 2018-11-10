import React from 'react';

const AboutJob = props => {
  const job = props.job;
  return (
    <div className="job">
      <h3 className="job-title">{job.title}</h3>
      <div className="job-company-row">
        <span className="jc-name" dangerouslySetInnerHTML={{ __html: job.companyName }}/>
        <span className="jc-dates">{job.dates}</span>
      </div>
      <p className="job-description" dangerouslySetInnerHTML={{ __html: job.description }}/>
    </div>
  );
};

export default AboutJob;
