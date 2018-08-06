import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  state = {
    showMenu: false,
  };
  
  toggleNavMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
    
  };
  resetWindowPosition = () => { window.scrollTo(0, 0); };
  
  render() {
    return (
      <header>
        <div
          className={`menu-btn ${this.state.showMenu ? 'close' : ''}`}
          onClick={this.toggleNavMenu}
        >
          <div className="btn-line"/>
          <div className="btn-line"/>
          <div className="btn-line"/>
        </div>
    
        <nav className={`menu ${this.state.showMenu ? 'show' : ''}`}>
          <div className={`menu-branding ${this.state.showMenu ? 'show' : ''}`}>
            <div className="portrait"/>
          </div>
      
          <ul className={`menu-nav ${this.state.showMenu ? 'show' : ''}`}>
            <li className={`nav-item ${this.state.showMenu ? 'show' : ''}`}>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="nav-link--active"
                onClick={() => { this.toggleNavMenu(); this.resetWindowPosition(); }}
              >
                Home
              </NavLink>
            </li>
            <li className={`nav-item ${this.state.showMenu ? 'show' : ''}`}>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="nav-link--active"
                onClick={() => { this.toggleNavMenu(); this.resetWindowPosition(); }}
              >
                About Me
              </NavLink>
            </li>
            <li className={`nav-item ${this.state.showMenu ? 'show' : ''}`}>
              <NavLink
                to="/portfolio"
                className="nav-link"
                activeClassName="nav-link--active"
                onClick={() => { this.toggleNavMenu(); this.resetWindowPosition(); }}
              >
                Examples of My Work
              </NavLink>
            </li>
            <li className={`nav-item ${this.state.showMenu ? 'show' : ''}`}>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="nav-link--active"
                onClick={() => { this.toggleNavMenu(); this.resetWindowPosition(); }}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
