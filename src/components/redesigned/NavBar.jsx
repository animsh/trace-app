import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setIsAuthenticated(Boolean(localStorage.getItem("isAuthenticated")));
  //     console.log("Storage changed!" + isAuthenticated);
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   // return () => {
  //   //   window.removeEventListener("storage", handleStorageChange);
  //   // };
  // }, []);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home" style={{ fontWeight: 600 }}>
            Trace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/storage">Storage</Nav.Link>
              <Nav.Link href="/received">Received</Nav.Link>
              <NavDropdown title="Operations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/encode">Encode</NavDropdown.Item>
                <NavDropdown.Item href="/decode">Decode</NavDropdown.Item>
                {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
