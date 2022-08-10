import React from "react";
import "./MenuPreview.css";
import { useMenuContext } from "../../context/MenuContext";

const MenuPreview = () => {
  const { menu, setMenu } = useMenuContext();

  const handleItemDelete = (itemToDelete) => {
    setMenu(menu.filter((item) => item.id !== itemToDelete.id));
  };

  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {menu.length < 1 ? "No items selected..." : null}
        {menu &&
          menu.map((item, index) => (
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
                onClick={() => handleItemDelete(item)}
                className="remove-item"
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MenuPreview;
