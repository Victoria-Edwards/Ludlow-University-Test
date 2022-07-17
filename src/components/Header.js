import React from "react";
import SkipLink from "./SkipLink";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container-fluid mb-3">
      <SkipLink />
      <Nav />
    </header>
  );
};

export default Header;
