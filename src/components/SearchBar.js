import React from "react";
import "../styles/searchBar.scss";
const SearchBar = () => {
  return (
    <form className="d-flex searchForm w-50 mx-auto" role="search">
      <label htmlFor="site-search" className="visuallyHidden">
        Search this site
      </label>
      <input
        type="search"
        id="site-search"
        className="form-control site-search"
        title="Search this site"
        placeholder="Search"
      />
      <button
        className="site-submit"
        type="submit"
        value="Submit"
        title="Submit"
      ></button>
    </form>
  );
};

export default SearchBar;
