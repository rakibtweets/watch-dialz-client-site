import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="mt-5">
      <Container className="w-75">
        <h2 className="fw-bold text-center text-info my-5">Contact Us</h2>
        <Row xs={1} md={2} lg={2} className=" g-4 mt-5">
          <Col
            className=" d-flex justify-content-center justify-content-lg-start
              "
          >
            <Fade left>
              <div className="contact-details">
                <div className="contact-info d-flex gap-3">
                  <div className="icon">
                    <i className="far fa-envelope fa-3x"></i>
                  </div>
                  <div className="adress">
                    <h4>Email and Phone</h4>
                    <p className="small">
                      example@gmail.com <br />
                      019xxxxxxxxx
                    </p>
                  </div>
                </div>
                <div className="contact-info d-flex gap-3">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt fa-3x"></i>
                  </div>
                  <div className="adress">
                    <h4>Our Location</h4>
                    <p className="small">
                      29 Street, Melbourne City
                      <br />
                      example@gmail.com
                    </p>
                  </div>
                </div>
                <div className="contact-info d-flex gap-3">
                  <div className="icon">
                    <i className="far fa-comments fa-3x"></i>
                  </div>
                  <div className="adress">
                    <h4>Mail or Phone</h4>
                    <p className="small">
                      example@gmail.com <br />
                      019xxxxxxxxx
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade right>
              <form onSubmit={handleSubmitForm}>
                <div className="mb-3 d-flex flex-column flex-lg-row justify-content-between gap-3">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder=" Message"
                    rows="6"
                  ></textarea>
                  <button className="btn btn-danger fw-bold w-25 mt-4">
                    Send
                  </button>
                </div>
              </form>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
