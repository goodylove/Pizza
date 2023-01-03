import React from "react";
import AboutImg from "../assets/3.jpg";
import "../Style/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{
          backgroundImage: `url(${AboutImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      ></div>
      <div className="rightSide">
        <h2>CONTACT US</h2>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter  name...." />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter  email...." />

          <label htmlFor="messagel">Message</label>
          <textarea rows="6" name="message"></textarea>
          <button type="submit">Contact us</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
