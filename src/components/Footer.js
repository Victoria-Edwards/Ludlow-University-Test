import React from "react";
import { Link } from "react-router-dom";
import FakeTweet from "../components/FakeTweet";
import "../styles/footer.scss";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="site-footer mt-auto">
      <div className="footerContent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 text-center text-md-end social order-md-2">
              <FakeTweet />
            </div>
            <div className="col-sm-12 col-md-6 logoSide order-md-1">
              <ul className="d-flex justify-content-center justify-content-md-start logos1 mb-1 mb-md-5">
                <li>
                  <Link className="logo" to="/">
                    <img
                      src="assets/dark.png"
                      alt="Ludlow University logo"
                      loading="lazy"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 text-center text-lg-end social">
            <ul className="social-icons d-flex justify-content-center justify-content-lg-start">
              <li>
                <a
                  className="twitter"
                  href="http://twitter.com/"
                  title="Twitter"
                >
                  <span className="bi bi-twitter"></span>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://uk.linkedin.com/"
                  title="Linkedin"
                >
                  <span className="bi bi-linkedin"></span>
                </a>
              </li>
              <li>
                <a
                  className="google"
                  href="https://www.google.co.uk/"
                  title="Google"
                >
                  <span className="bi bi-google"></span>
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/"
                  title="Facebook"
                >
                  <span className="bi bi-facebook"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center copyright-text">
            <p>
              &copy; Ludlow University &nbsp;
              <span id="year">{today.getFullYear()}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
