import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="card text-bg-light mb-3 shadow">
        <div className="card-header display-6">About Us</div>
        <div className="card-body">
          <h5 className="card-title">
            These Are Mini Projects For Educational Purpose
          </h5>
          <p className="card-text">Some quick example of API Integration</p>
          <ol>
            <li>ASTRO: https://go-apod.herokuapp.com/apod</li>
            <li>USER: https://randomuser.me/api/</li>
            <li>JOKE: https://v2.jokeapi.dev/joke/Any</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
