import React from "react";
import { Link } from "react-router-dom";
import navData from "../navigation-data.json";
import SearchDropdown from "./SearchDropdown";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light mainNav"
      aria-label="main navbar"
    >
      <div className="container px-0">
        <Link className="navbar-brand logo" to="/">
          <img src="assets/ludlowUniLogo.png" alt="Ludlow University logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav  mb-2 mb-md-0 d-flex w-50 mx-auto ms-md-auto me-md-0 justify-content-around align-items-center">
            {navData.map((navlink, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={navlink.url}>
                  {navlink.title}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <SearchDropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
