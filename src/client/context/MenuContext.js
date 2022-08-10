import React, { useState, useEffect, createContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  return <MenuContext.Provider>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);
  return context;
};
