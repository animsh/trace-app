import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" text-dark py-3" style={{ backgroundColor: "#f2f2f3" }}>
      <Container className="d-flex justify-content-between align-items-center">
        <div className="mb-0">
          <p className="mb-0">© 2023 Trace. All rights reserved.</p>
        </div>
        <div>
          {/* <ul className="list-inline mb-0">
            <li className="list-inline-item mx-3">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#">Terms of Service</a>
            </li>
            <li className="list-inline-item mx-3">
              <a href="#">Contact</a>
            </li>
          </ul> */}
          <p className="mb-0">Made with 💜</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
