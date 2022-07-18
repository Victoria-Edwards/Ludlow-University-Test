import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routeData from "./Routes";
import "../styles/breadcrumb.scss";

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(routeData);

  return (
    <nav aria-label="breadcrumb" className="container">
      <ul className="breadcrumb">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <li className="breadcrumb-item" key={match.pathname}>
            <Link to={match.pathname}>{breadcrumb}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Breadcrumb;
