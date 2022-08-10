import React from "react";
import ItemSearch from "../ItemSearch/ItemSearch";
import "./ItemPicker.css";

const ItemPicker = () => {
  return (
    <div className="col-4">
      <ItemSearch />
      <ul className="item-picker">
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
        <li className="item">
          <h2>Dummy item</h2>
          <p>
            <span className="dietary">ve</span>
            <span className="dietary">v</span>
            <span className="dietary">n!</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ItemPicker;
