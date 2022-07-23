import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "../styles/breadcrumb.scss";

const Breadcrumb = ({ crumbs }) => {
  const breadcrumbs = useBreadcrumbs(crumbs);

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
