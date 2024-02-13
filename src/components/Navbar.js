import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light"
    };
  }

  toggleMode() {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark"
      });
    } else {
      this.setState({
        mode: "light"
      });
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News Horizon
            </Link>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Business"
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")} to="/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")} to="/sports">
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
              <div className={`form-check form-switch mx-3 text-dark"}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => {
                    this.toggleMode();
                  }}
                  style={{ cursor: "pointer" }}
                />
                {this.state.mode === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-moon-stars-fill mb-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-brightness-high-fill mb-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
