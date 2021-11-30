import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      {/* <Link to="/about"> About Us</Link>
      <Link to="/contact"> Contact Us</Link> */}

      <br />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active_class nav-link"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active_class nav-link"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active_class nav-link"
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Menu;
