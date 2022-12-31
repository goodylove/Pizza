import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../Style/NavBar.css";
import "font-awesome/css/font-awesome.css";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";

function NavBar() {
  const [openLink, setOpenlinks] = useState(false);

  const toggller = () => {
    setOpenlinks(!openLink);
  };
  return (
    <div className="navBar">
      <div className="left-side" id={openLink ? "open" : "close"}>
        <img src={logo} alt="logo" style={{ width: "70px", height: "70px" }} />
        {/* <div className="hidden-links">\
                    <Link to={Home }>Home</Link>
                    <Link to={Menu }>Menu</Link>
                    <Link to={About }>About</Link>
                    <Link to={Contact }>Contact</Link>
                </div> */}

        <div className="hidden-links">
          <Link to="/Home">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      <div className="right-side">
        <Link to="/Home">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <div
        className="menu-bar"
        style={{ color: "white", fontSize: 40 }}
        onClick={toggller}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default NavBar;
