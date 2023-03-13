import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="fixed-bottom bg-light">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 border-top border-danger">
          <div className="col-md-4 d-flex align-items-center">
            🕸 MINI Projects 🕸
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
