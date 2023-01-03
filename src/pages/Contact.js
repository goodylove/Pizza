import React from "react";
import AboutImg from "../assets/.jpg";

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
          width: "100%",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      ></div>
      <div className="rightSide">
        <form>
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
