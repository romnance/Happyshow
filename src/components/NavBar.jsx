import React from "react";
import { useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
  let location = useLocation();

  return (
    <Navbar
      expand="lg"
      style={{
        padding: "0.55em 1em",
        borderBottom: "2px solid palevioletred",
        background: "papayawhip",
        marginBottom: "2em",
      }}
    >
      <Navbar.Brand style={{ fontWeight: "700", color: "black" }} href="/">
        Happy Shows
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginLeft: "auto" }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link
              href="/"
              style={{ fontWeight: "600", marginRight: "0.2em" }}
              className={location?.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              All Shows
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/myshows"
              style={{ fontWeight: "600" }}
              className={
                location?.pathname === "/myshows" ? "nav-link active" : "nav-link"
              }
            >
              My Shows
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
