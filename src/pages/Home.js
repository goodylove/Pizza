import React from "react";
import { Link } from "react-router-dom";

import BannerImg from "../assets/1.jpg";
import "../Style/Home.css";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${BannerImg})`,
      }}
    >
      <div className="home-container">
        <h1>Goody's Pizzeria</h1>
        <p>pizza to fit any taste</p>
        <Link to="/Menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
