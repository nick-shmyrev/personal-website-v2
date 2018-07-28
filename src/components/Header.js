import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Personal Website v2</h1>
    <hr/>
    <NavLink exact to="/" activeClassName="navlink-active">Home Page</NavLink>
  </header>
);

export default Header;
