import React, { useState, useEffect, createContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // SET HOOKS
  const [items, setItems] = useState([]);
  const [menu, setMenu] = useState([]);

  // API CALL
  useEffect(() => {
    fetch("http://localhost:3000/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <MenuContext.Provider value={{ items, setItems, menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  return context;
};
