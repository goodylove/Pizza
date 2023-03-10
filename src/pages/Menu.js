import React from "react";
import { MenuItems } from "../Helper/MenuItems";
import MenuList from "../Components/MenuList";
import "../Style/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <span className="menuTitle">OUR MENU</span>
      <div className="MenuList">
        {MenuItems.map((MenuItem, key) => {
          return (
            <MenuList
              key={key}
              image={MenuItem.imgUrl}
              price={MenuItem.price}
              name={MenuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
