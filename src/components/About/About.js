import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div class="card text-bg-light mb-3 shadow">
        <div class="card-header display-6">About Us</div>
        <div class="card-body">
          <h5 class="card-title">
            These Are Mini Projects For Educational Purpose
          </h5>
          <p class="card-text">Some quick example of API Integration</p>
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
