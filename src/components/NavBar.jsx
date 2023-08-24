import React from 'react';

import {
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const Navbar = () => (
  <nav className="nav-bar">
    <div className="nav-brand">
      <Link to="/bookstore-cms/"><h1>Bookstore CMS</h1></Link>
    </div>
    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/bookstore-cms/">BOOKS</Link>
      </li>
      <li>
        <Link className="nav-link" to="/bookstore-cms/categories">CATEGORIES</Link>
      </li>
    </ul>
    <button type="button" className="login-btn">
      <FontAwesomeIcon icon={faCircleUser} />
    </button>
  </nav>
);

export default Navbar;
