import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
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
        <p>pizz to fit any taste</p>
        <Link to={Menu}>
          <button>ODER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
