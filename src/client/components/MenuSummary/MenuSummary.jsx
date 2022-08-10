import React from "react";
import "./MenuSummary.css";
import { useMenuContext } from "../../context/MenuContext";

const MenuSummary = () => {
  const { menu } = useMenuContext();
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{menu.length} item(s)</span>
          </div>
          <div className="col-6 menu-summary-right">
            6x <span className="dietary">ve</span>
            4x <span className="dietary">v</span>
            12x <span className="dietary">n!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSummary;
