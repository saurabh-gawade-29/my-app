import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Astro from "./components/Astro/Astro";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Joke from "./components/Joke/Joke";
import Dog from "./components/Dog/Dog";
import Homepage from "./components/Homepage/Homepage";
import Ipaddress from "./components/Ipaddress/Ipaddress";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mb-5 mt-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="astro" element={<Astro />} />
          <Route path="user" element={<User />} />
          <Route path="about" element={<About />} />
          <Route path="joke" element={<Joke />} />
          <Route path="dog" element={<Dog />} />
          <Route path="ipaddress" element={<Ipaddress />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
