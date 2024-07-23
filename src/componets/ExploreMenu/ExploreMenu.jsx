import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu  ({category, setCategory})  {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis,
        molestiae quidem ipsa necessitatibus alias molestias. Inventore debitis
        labore repudiandae doloremque, quidem, illo earum sed, adipisci
        doloribus quibusdam quos numquam!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_image ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
