import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <NavLink to="/">BookStore CMS</NavLink>
    <NavLink to="/">Books</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </div>
);

export default Navbar;
