import React from "react";
import { Link } from "react-router-dom";
import "../styles/banner.scss";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row banner">
        <img
          className="img-fluid"
          src="assets/banner-image.jpg"
          alt="people looking at images"
          loading="lazy"
        />
        <div className="bannerText">
          <hr />
          <p className="px-3">
            Come along to one of our Open Days and find out everything you need
            to know about the campus, courses, and facilities
          </p>
          <div className="gradientButton">
            <Link to="/book-an-open-day">Book an Open Day</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
