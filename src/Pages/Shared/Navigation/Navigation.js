import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navigation.css';
import UserAvatar from 'react-user-avatar';

const Navigation = () => {
  const { user, userLogOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="py-2 px-3"
        bg="light"
        variant="light"
      >
        <Container fluid>
          <Nav.Link as={Link} to="/home" className="fw-bolder h5">
            <span className="text-black">Watch</span>
            <span className="text-info">Dialz</span>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-lg-auto text-center px-2">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/watches">
                Watches
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/faq">
                Faq
              </Nav.Link>
              {user.email && (
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
            </Nav>

            {!user?.email ? (
              <Nav className="text-center">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link
                  className="btn btn-info text-white rounded-pill px-3 py-2 mx-2"
                  as={Link}
                  to="/register"
                >
                  Register
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="text-center d-lg-flex align-items-lg-center">
                <Nav.Link className="text-black fw-bold mx-2">
                  {user?.displayName}{' '}
                </Nav.Link>
                {user?.displayName && (
                  <UserAvatar
                    className="text-white mx-auto"
                    size="50"
                    name={user?.displayName}
                  />
                )}
                <Nav.Link>
                  <button
                    onClick={userLogOut}
                    className="btn btn-danger text-white rounded-pill px-3 py-2"
                  >
                    Log Out
                  </button>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
