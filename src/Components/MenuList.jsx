import React from "react";

function MenuList({ image, price, name }) {
  return (
    <div className="menu-item">
      <div>
        <img src={image} alt="imgae" />
      </div>
      <div className="pizz-name">{name}</div>
      <div className="pizz-price">{price}</div>
    </div>
  );
}

export default MenuList;
