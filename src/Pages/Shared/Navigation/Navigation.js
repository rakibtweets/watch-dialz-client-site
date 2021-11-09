import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="py-3 px-3"
        bg="light"
        variant="light"
      >
        <Container fluid>
          <Nav.Link as={Link} to="/home" className="fw-bold h4">
            DialZ
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-lg-auto text-center ">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/watches">
                Watches
              </Nav.Link>

              <Nav.Link as={Link} to="/Services">
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/Contact">
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="text-center">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>

            {/* <Nav className="text-center">
              <Nav.Link className="text-secondary">User Name</Nav.Link>

              <Nav.Link className="bg-danger rounded-pill px-4">
                Log Out
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
