import React, { useState } from "react";
import "./ItemSearch.css";
import { useMenuContext } from "../../context/MenuContext";
import { apiUrl } from "../../config/api";
const ItemSearch = () => {
  const { items, setItems } = useMenuContext();
  const [searchQuery, setSearchQuery] = useState();

  const handleSearchItem = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setItems(items);
    } else {
      fetch(`${apiUrl}/${searchQuery.toLowerCase()}`)
        .then((response) => response.json())
        .then((searchResults) => setItems(searchResults.result))
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <form onChange={handleSearchItem}>
      <div className="filters">
        <input
          className="form-control"
          placeholder="Name"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default ItemSearch;
