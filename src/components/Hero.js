import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <div className="container heroSection">
      <div className="row justify-content-start align-items-center mb-4">
        <div className="col-12 col-md-6 order-md-2">
          <div className="imgContainer">
            <img
              className="img-fluid"
              src="assets/hero.png"
              alt="a smiling girl"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 order-md-1">
          <h1>Student Life</h1>
          <h2>
            There is so much going on at Ludlow University, both on and off
            campus.
          </h2>
          <h3>Lisa Smith</h3>
          <p className="smallText">
            Student, BSc (Hons) Computer Games Design{" "}
          </p>
          <div className="gradientButton">
            <Link to="/studentStories">View student stories</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
