import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { countries } from "./Countries";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      countriesArray: countries
    };
  }

  toggleMode() {
    if (this.props.mode === "light") {
      this.props.toggleMode("dark");
    } else {
      this.props.toggleMode("light");
    }
  }

  render() {
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
            >
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
                  <NavLink
                    to="/home"
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Business"
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/health"
                  >
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/sports"
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                    className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link")}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
              <div className="btn-group dropstart">
                <button
                  type="button"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={
                    this.props.mode === "light"
                      ? { color: "black", padding: "0px", border: "0px", marginTop: "-0.5rem" }
                      : { padding: "0px", border: "0px", marginTop: "-0.5rem", color: "white" }
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe"
                    viewBox="0 0 16 16"
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                  </svg>
                </button>
                <ul
                  className="dropdown-menu"
                  style={
                    this.props.mode === "light"
                      ? {
                          color: "black",
                          background: "white",
                          overflowX: "hidden",
                          overflowY: "scroll",
                          maxHeight: "20rem",
                          maxWidth: "10rem"
                        }
                      : {
                          color: "white",
                          background: "#3A3B3C",
                          overflowX: "hidden",
                          overflowY: "scroll",
                          maxHeight: "20rem",
                          maxWidth: "10rem"
                        }
                  }
                >
                  {this.state.countriesArray.map((element) => {
                    return (
                      <li key={element.code}>
                        <button
                          className={`dropdown-item drop-hover-country ${
                            this.props.country === element.code
                              ? "active"
                              : this.props.mode === "dark"
                              ? "text-white"
                              : "text-black"
                          }`}
                          type="button"
                          onClick={() => {
                            this.props.setCountry(element.code);
                          }}
                        >
                          {element.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button
                onClick={() => {
                  this.toggleMode();
                }}
                className={`mx-3 rounded-circle bg-${this.props.mode}`}
                style={
                  this.props.mode === "light"
                    ? { border: ".5px solid grey", color: "black" }
                    : { border: ".5px solid grey", color: "white" }
                }
              >
                {this.props.mode === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-brightness-high-fill mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-moon-stars-fill mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                )}
              </button>
              {/* <div className={`form-check form-switch mx-3 text-dark"}`}>
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
                {this.props.mode === "light" ? (
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
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-moon-stars-fill mb-2"
                    viewBox="0 0 16 16"
                    style={this.props.mode === "light" ? { color: "black" } : { color: "white" }}
                  >
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                )}
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
