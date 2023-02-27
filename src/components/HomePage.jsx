import React, { Component } from "react";
import NavBar from "./NavBar";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-primary m-2 btn-lg">
              Encode
            </button>

            <button type="button" className="btn btn-primary m-2 btn-lg">
              Decode
            </button>
          </div>
        </div>

        <footer className="footer mt-auto py-3 bg-light fixed-bottom">
          <div className="container">
            <span className="text-muted">
              © 2023 Trace - Secure File Transfer
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default HomePage;
