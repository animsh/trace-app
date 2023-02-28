import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="container navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <h4> Trace - Secure File Transfer</h4>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/info">
                  <span className="material-symbols-rounded">info</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/storage">
                  <span class="material-symbols-rounded">cloud_circle</span>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  <span className="material-symbols-rounded">
                    account_circle
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
