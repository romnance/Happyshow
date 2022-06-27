import React from "react";
import styled from "styled-components";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

function NavBar() {
  const Styles = styled.div`
    .navbar {
      padding: 0.55em 1em;
      border-bottom: 2px solid palevioletred;
      background: papayawhip;
    }
    .navbar-brand {
      font-weight: 700;
      color: black;
      &:hover {
        color: palevioletred;
        font-weight: 700;
      }
    }
    a,
    .navbar-nav .nav-link {
      color: black;
      font-weight: 600;
      &:hover {
        color: palevioletred;
      }
    }
    .navbar-nav,
    .navbar-toggler {
      margin-left: auto;
    }
  `;

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Happy Shows</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/myshows">My Shows</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
