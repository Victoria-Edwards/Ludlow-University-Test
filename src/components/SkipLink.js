import React from "react";
import "../styles/skipLink.scss";

const SkipLink = () => {
  return (
    <div id="skip" role="navigation" aria-label="Skip to content">
      <a className="skip-to-content" href="#mainContent">
        Skip to Content
      </a>
    </div>
  );
};

export default SkipLink;
