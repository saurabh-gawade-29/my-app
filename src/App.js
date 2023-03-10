import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Astro from "./components/Astro/Astro";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Astro />} />
          <Route path="user" element={<User />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
