import React from "react";
import "./MenuBuilder.css";
import ItemPicker from "../ItemPicker/ItemPicker";
import MenuPreview from "../MenuPreview/MenuPreview";

const MenuBuilder = () => {
  return (
    <div className="container menu-builder">
      <div className="row">
        <ItemPicker />
        <MenuPreview />
      </div>
    </div>
  );
};

export default MenuBuilder;
