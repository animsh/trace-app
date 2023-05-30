import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
              <NavDropdown title="Operations" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} exact to="/encode" activeClassName="active">
                  Encode
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} exact to="/decode" activeClassName="active">
                  Decode
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} exact to="/storage" activeClassName="active">
                Storage
              </Nav.Link>
              <Nav.Link as={NavLink} exact to="/received" activeClassName="active">
                Received
              </Nav.Link>
              <Nav.Link as={NavLink} exact to="/users" activeClassName="active">
                Users
              </Nav.Link>
              <Nav.Link as={NavLink} exact to="/profile" activeClassName="active">
                Profile
              </Nav.Link>
              <Nav.Link as={NavLink} exact to="/about" activeClassName="active">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
