import React, { useState, useEffect, createContext } from "react";
import { apiUrl } from "../config/api";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // SET HOOKS
  const [items, setItems] = useState([]);
  const [menu, setMenu] = useState([]);
  const [diets, setDiets] = useState([]);
  // API CALL
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.log(error.message));
  }, []);

  // GET DIETS
  useEffect(() => {
    let dietArray = [];
    menu.forEach((item) => {
      dietArray = dietArray.concat(item.dietaries);
    });
    setDiets(dietArray);
  }, [menu]);

  return (
    <MenuContext.Provider
      value={{ items, setItems, menu, setMenu, diets, setDiets }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  return context;
};
