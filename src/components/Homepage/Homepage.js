import React from "react";
import "./Homepage.scss";
import astro from "../images/astro.jpg";
import fake from "../images/fake.jpg";
import joke from "../images/Joke.jpg";
import dog from "../images/Dog.jpg";
import ipadd from "../images/ipaddress.jpg";
import bored from "../images/Bored.jpg";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div>
      <p className="fw-bold">Basic Not Boring</p>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
          <div className="card shadow">
            <img src={astro} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate home-card-link">
                Galaxy
              </h5>
              <p className="card-text">
                Contains Information About Space & Galaxy.
              </p>
              <Link to="/astro" className="btn explore-btn ">
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
          <div className="card shadow">
            <img src={fake} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate home-card-link">
                Generate Random User
              </h5>
              <p className="card-text">
                Contains Information About Random Users.
              </p>
              <Link to="/user" className="btn explore-btn ">
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
          <div className="card shadow">
            <img src={joke} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate home-card-link">
                Daily Jokes
              </h5>
              <p className="card-text">Daily Laughter Dose</p>
              <Link to="/joke" className="btn explore-btn ">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
          <div className="card shadow">
            <img src={dog} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate home-card-link">
                Dog Images
              </h5>
              <p className="card-text">Woof Woof! See My Pictures</p>
              <Link to="/dog" className="btn explore-btn ">
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
          <div className="card shadow">
            <img src={ipadd} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate home-card-link">
                What Is My IP
              </h5>
              <p className="card-text">Contains Your Public IP Address</p>
              <Link to="/ipaddress" className="btn explore-btn ">
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
          <div className="card shadow">
            <img src={bored} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate home-card-link">
                Bored ?
              </h5>
              <p className="card-text">Let's Do Something</p>
              <Link to="/bored" className="btn explore-btn ">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
