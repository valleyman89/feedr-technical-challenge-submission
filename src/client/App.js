import React from "react";
import "./App.css";
import MenuSummary from "./components/MenuSummary/MenuSummary";
import MenuBuilder from "./components/MenuBuilder/MenuBuilder";

export default () => (
  <div className="wrapper">
    <MenuSummary />
    <MenuBuilder />
  </div>
);
