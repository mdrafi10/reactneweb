import React, { useState } from "react";

const Navbar = () => {
  const [navTog, setNavTog] = useState(false);
  return (
    <>
      <header className="nav-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#">
              Md Rafi
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setNavTog(!navTog)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${navTog ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sevices
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn  bnt-style" type="submit">
                  Sign Up
                </button>
                <button
                  className="btn bnt-style  bnt-style-border"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
