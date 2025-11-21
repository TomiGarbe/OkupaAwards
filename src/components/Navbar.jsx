import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Ig from '../assets/ig.png';
import '../styles/Navbar.css';

export default function AppNavbar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="p-3" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/candidatos">Candidatos</Nav.Link>
            <Nav.Link as={Link} to="/votaciones">Votaciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a
          href="https://www.instagram.com/okupaawards/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "absolute", right: "17%" }}
        >
          <img
            src={Ig}
            alt="Instagram"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </a>
      </Container>
    </Navbar>
  );
}
