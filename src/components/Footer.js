import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      Copyright © {date.getFullYear()}.
      Based on design by <a href="http://www.traversymedia.com/" target="_blank" rel="noopener noreferrer">Brad Traversy</a>
    </footer>
  );
};

export default Footer;
