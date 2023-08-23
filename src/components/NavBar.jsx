import {
  Link,
} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar-container">
    <h1>Bookstore</h1>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">categories</Link>
      </li>

    </ul>
  </nav>
);

export default Navbar;
