import React from "react";
import "../styles/breadcrumb.scss";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="container">
      <ul className="breadcrumb">
        <li className="breadcrumb-item" aria-current="page">
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
