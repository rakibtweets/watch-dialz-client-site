import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container fluid className=" bg-dark px-5">
        <Row xs={1} md={2} lg={3} className="g-5 mt-5 justify-content-center">
          <Col>
            <div className="footer-brand-info text-white p-3">
              <h3 className="brand-name fw-bold text-white">
                <span>Watch</span>
                <span className="text-info">Dialz</span>{' '}
              </h3>
              <p className="brand-shor-details text-white small">
                WatchDial is a watch company that has collection of all top
                brands watch,with high quality services
              </p>
              <div className="footer-logo-icon d-flex w-auto gap-3">
                <i className="fab fa-facebook fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-linkedin fa-2x"></i>
              </div>
            </div>
          </Col>

          <Col className="d-none d-md-block">
            <div className="about-links">
              <h4 className="text-white">Page Links</h4>
              <div className="other-links">
                <NavLink className="nav-link text-white" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link text-white" to="/watches">
                  Watches
                </NavLink>
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
                <NavLink className="nav-link text-white" to="/services">
                  Services
                </NavLink>
                <NavLink className="nav-link text-white" to="/Dashboard">
                  Dashboard
                </NavLink>
              </div>
            </div>
          </Col>
          <Col className="d-none d-lg-block ">
            <div className="about-links">
              <h2 className="text-white">Our Servies</h2>
              <div className="other-links">
                <NavLink className="nav-link text-white" to="/home">
                  Yearly servicin
                </NavLink>
                <NavLink className="nav-link text-white" to="/home">
                  Payback Guaranty
                </NavLink>
                <NavLink className="nav-link text-white" to="/home">
                  After Sells Service
                </NavLink>
                <NavLink className="nav-link text-white" to="/home">
                  Montly EMI
                </NavLink>
                <NavLink className="nav-link text-white" to="/home">
                  Customer Satisfaction
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
