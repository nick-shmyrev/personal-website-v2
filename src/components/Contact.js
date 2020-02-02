import React from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => (
  <main id="contact">
    <h1 className="lg-heading">Contact <span className="text-secondary">Me</span></h1>
    <h2 className="sm-heading">Like what you see? Let's get in touch!</h2>
    <div className="contact-badge">
      <div className="flex-row">
        <div className="avatar"/>
        <div>
          <h3 className="name">Nick <span className="text-secondary">Shmyrev</span></h3>
          <h4 className="title">Full Stack Developer</h4>
          <hr/>
          <h4>Bringing ideas to life, one line of code at a time</h4>
          <a href="https://www.linkedin.com/in/nickshmyrev" target="_blank" className="btn-linkedin"><FontAwesomeIcon icon={faLinkedin} className="fa-1.5x fa-fw"/> Connect</a>
        </div>
      </div>
      
    </div>
  </main>
);

export default Contact;
