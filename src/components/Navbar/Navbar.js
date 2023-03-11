import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="lucifer-main-navbar">
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <div className="navbar-brand lucifer-logo">LUCIFER</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  RandomUsers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link font-weight-bold"
                  to="/joke"
                  activeclassname="active"
                >
                  Jokes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link font-weight-bold"
                  to="/dog"
                  activeclassname="active"
                >
                  Dogs
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
