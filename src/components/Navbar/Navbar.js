import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="lucifer-main-navbar">
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand udaan-full" to="/">
            <div className="navbar-brand lucifer-logo">LUCIFER</div>
          </NavLink>
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
            <ul className="navbar-nav d-flex justify-content-end w-100">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
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
