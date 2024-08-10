import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          C3
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Web Development
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                App Development
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                AIML
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Competitive Programming
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Graphic Design
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-primary ms-3">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
