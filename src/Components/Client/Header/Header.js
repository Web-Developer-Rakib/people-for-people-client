import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase_init";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log out successful.");
      })
      .catch((error) => {
        toast.error("An error happened.");
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="my-lg-4" variant="light">
      <Container>
        <Navbar.Brand href="#home">People for People</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/donation">
              Donation
            </Nav.Link>
            <Nav.Link as={NavLink} to="/events">
              Events
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            {!userInfo ? (
              <>
                <Button
                  onClick={() => navigate("/login")}
                  className="btn-info mb-2 mb-lg-0 mx-lg-3"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  className="btn-success"
                >
                  Register
                </Button>
              </>
            ) : (
              <Button onClick={handleSignOut} className="btn-danger">
                Log out
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
