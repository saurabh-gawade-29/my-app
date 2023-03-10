import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">LUCIFER</div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link font-weight-bold"
                  to="/"
                  activeclassname="active"
                >
                  Astro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link font-weight-bold"
                  to="/user"
                  activeclassname="active"
                >
                  RandomUser
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link font-weight-bold"
                  to="/joke"
                  activeclassname="active"
                >
                  Joke
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link font-weight-bold"
                  to="/about"
                  activeclassname="active"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
