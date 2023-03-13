import React from "react";
import "./Homepage.scss";
import astro from "../images/astro.jpg";
import fake from "../images/fake.jpg";
import joke from "../images/Joke.jpg";
import dog from "../images/Dog.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="card shadow">
            <img src={astro} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate">Galaxy</h5>
              <p className="card-text">
                Contains Information About Space & Galaxy.
              </p>
              <Link to="/astro" className="btn mat-balck-btn ">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="card shadow">
            <img src={fake} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate">Generate Random User</h5>
              <p className="card-text">
                Contains Information About Random Users.
              </p>
              <Link to="/user" className="btn mat-balck-btn ">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="card shadow">
            <img src={joke} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate">Daily Jokes</h5>
              <p className="card-text">Daily Laughter Dose</p>
              <Link to="/joke" className="btn mat-balck-btn ">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
          <div className="card shadow">
            <img src={dog} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate">Dog Images</h5>
              <p className="card-text">Woof Woof! See My Pictures</p>
              <Link to="/dog" className="btn mat-balck-btn ">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
