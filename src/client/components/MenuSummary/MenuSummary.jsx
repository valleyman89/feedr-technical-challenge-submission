import React from "react";
import "./MenuSummary.css";
import { useMenuContext } from "../../context/MenuContext";

const MenuSummary = () => {
  const { menu, diets } = useMenuContext();
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{menu.length} item(s)</span>
          </div>
          <div className="col-6 menu-summary-right">
            {diets
              .filter((diet, index, newDietArray) => {
                return newDietArray.indexOf(diet) == index;
              })
              .sort()
              .map((diet, index) => (
                <span key={index}>
                  {diets.filter((selectedDiet) => selectedDiet === diet).length}
                  x<span className="dietary">{diet}</span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSummary;
