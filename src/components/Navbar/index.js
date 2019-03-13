import React from "react";
import "./index.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src="images/hex.png"
        className="img-fluid logo m-4"
        // alt="heart shaped locket with couple inside"
      />
      <a
        className="navbar-brand px-2 mx-2"
        onClick={() => props.setpage("Page One")}
      >
        <h1>Static React Template</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {props.pages.map(page => {
            return (
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => props.setpage(page)}
                >
                  {page} <span className="sr-only">(current)</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
