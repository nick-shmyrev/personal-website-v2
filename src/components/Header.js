import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header__menu-btn">
      <div className="header__btn-line"/>
      <div className="header__btn-line"/>
      <div className="header__btn-line"/>
    </div>
    
    <nav>
      <div className="header__menu-branding">
        <div className="portrait"/>
      </div>
      
      <ul className="header__menu-nav">
        <li className="header__nav-item">
          <NavLink exact to="/" className="header__nav-link" activeClassName="header__nav-link--active">Home</NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/about" className="header__nav-link" activeClassName="header__nav-link--active">About Me</NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/portfolio" className="header__nav-link" activeClassName="header__nav-link--active">Examples of My Work</NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/contact" className="header__nav-link" activeClassName="header__nav-link--active">Contact Me</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
