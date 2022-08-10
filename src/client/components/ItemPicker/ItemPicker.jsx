import React from "react";
import ItemSearch from "../ItemSearch/ItemSearch";
import "./ItemPicker.css";
import { useMenuContext } from "../../context/MenuContext";
const ItemPicker = () => {
  const { items } = useMenuContext();
  return (
    <div className="col-4">
      <ItemSearch />
      <ul className="item-picker">
        {items &&
          items.map((item, index) => (
            <li key={item.id} className="item">
              <h2>{item.name}</h2>
              <p>
                {item.dietaries.map((diet, index) => (
                  <span key={index} className="dietary">
                    {diet}
                  </span>
                ))}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemPicker;
