import React from "react";
import ItemSearch from "../ItemSearch/ItemSearch";
import "./ItemPicker.css";
import { useMenuContext } from "../../context/MenuContext";
const ItemPicker = () => {
  const { items, menu, setMenu } = useMenuContext();

  const handleUpdateMenu = (item) => {
    setMenu([...menu, item]);
  };

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
              <button
                onClick={() => handleUpdateMenu(item)}
                className="remove-item"
                disabled={menu.find(
                  (selectedItem) => item.id === selectedItem.id
                )}
              >
                +
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemPicker;
