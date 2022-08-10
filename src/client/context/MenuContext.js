import React, { useState, useEffect, createContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // SET HOOKS
  const [items, SetItems] = useState([]);

  // API CALL
  useEffect(() => {
    fetch("http://localhost:3000/api/items")
      .then((response) => response.json())
      .then((data) => SetItems(data.items))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <MenuContext.Provider value={{ items }}>{children}</MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  return context;
};
