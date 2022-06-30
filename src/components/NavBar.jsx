import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

function NavBar() {
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
            <Nav.Link href="/" style={{ color: "black", fontWeight: "600" }}>
              <Button className="btn btn-secondary">All Shows</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/myshows" style={{ color: "black", fontWeight: "600" }}>
              <Button className="btn btn-secondary">My Shows</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
