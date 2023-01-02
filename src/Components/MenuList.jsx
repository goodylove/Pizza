import React from "react";
// import { MenuItems } from "../Helper/MenuItems";

function MenuList({ image, price, name }) {
  return (
    <div
      className="menu-item"
      // style={{
      //   backgroundImage: `url(${image})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div>
        <img src={image} alt="imgae" />
      </div>
      <div className="pizz-name">{name}</div>
      <div className="pizz-price">{price}</div>
    </div>
  );
}

export default MenuList;
