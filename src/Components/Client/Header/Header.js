import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Donation</Nav.Link>
            <Nav.Link href="#pricing">Event</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Button className="btn-info mb-2 mb-lg-0 mx-lg-3">Login</Button>
            <Button className="btn-success">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
