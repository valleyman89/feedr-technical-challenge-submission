import React from "react";
import "./MenuPreview.css";

const MenuPreview = () => {
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
          <button className="remove-item">x</button>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
          <button className="remove-item">x</button>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
          <button className="remove-item">x</button>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
          <button className="remove-item">x</button>
        </li>
      </ul>
    </div>
  );
};

export default MenuPreview;
