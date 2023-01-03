import React from "react";
import AboutImg from "../assets/1.jpg";
import "../Style/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="holder"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      ></div>
      <div className="about-us">
        <h2> ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          consectetur iure, maxime assumenda modi fuga vel temporibus, eius
          incidunt, quia voluptates. Amet odit sapiente vitae voluptatem
          doloribus laudantium dolore enim?
        </p>
      </div>
    </div>
  );
}

export default About;
