import React from "react";
import "./App.css";
import ItemPicker from "./components/ItemPicker/ItemPicker";
import MenuPreview from "./components/MenuPreview/MenuPreview";
import MenuSummary from "./components/MenuSummary/MenuSummary";

export default () => (
  <div className="wrapper">
    <MenuSummary />
    <div className="container menu-builder">
      <div className="row">
        <ItemPicker />
        <MenuPreview />
      </div>
    </div>
  </div>
);
