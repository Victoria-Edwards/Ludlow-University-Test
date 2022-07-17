import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "../styles/searchDropdown.scss";

function SearchDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="searchDropdown">
      <button
        className="openSearchButton"
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="visuallyHidden"> Dropdown button</span>
      </button>
      <div
        className={
          isOpen
            ? "container-fluid dropdown-group active"
            : " container-fluid dropdown-group"
        }
      >
        <SearchBar />
      </div>
    </div>
  );
}

export default SearchDropdown;
