import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MenuProvider } from "./context/MenuContext";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

ReactDOM.render(
  <MenuProvider>
    <App />
  </MenuProvider>,
  document.getElementById("root")
);
