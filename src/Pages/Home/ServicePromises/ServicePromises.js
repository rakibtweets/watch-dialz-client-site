import React from 'react';
import './ServicePromises.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaPeopleCarry,
  FaHeadset,
  FaServicestack,
  FaThumbsUp,
} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const ServicePromises = () => {
  return (
    <div>
      <Fade bottom>
        <h3 className="fw-bold text-center my-5">
          Our <span className="text-info">Services</span>
        </h3>
      </Fade>
      <Container>
        <Row xs={1} md={2} lg={4}>
          <Fade left>
            <Col className=" d-block d-lg-flex">
              <Card className="w-100 p-4 service-card">
                <div className="icon-img mx-auto">
                  <FaPeopleCarry
                    className="text-info  bg-light p-3 rounded-circle"
                    size="7em"
                  />
                </div>
                <div className="service-info text-center p-2">
                  <h5 className="text-info fw-bold">On Time Dellivey</h5>
                  <p className="text-secondary">
                    We Promise to Deliver Our products on Time,We also provide
                    free delivery
                  </p>
                </div>
              </Card>
            </Col>
          </Fade>
          <Fade left>
            <Col className=" d-block d-lg-flex">
              <Card className="w-100 p-4 service-card">
                <div className="icon-img mx-auto">
                  <FaHeadset
                    className="text-info  bg-light p-3 rounded-circle"
                    size="7em"
                  />
                </div>
                <div className="service-info text-center p-2">
                  <h5 className="text-info fw-bold">Onine Support</h5>
                  <p className="text-secondary">
                    We Give You 24 hrs on line support,If any support needed we
                    will keep in touch
                  </p>
                </div>
              </Card>
            </Col>
          </Fade>
          <Fade right>
            <Col className=" d-block d-lg-flex">
              <Card className="w-100 p-4 service-card">
                <div className="icon-img mx-auto">
                  <FaServicestack
                    className="text-info  bg-light p-3 rounded-circle"
                    size="7em"
                  />
                </div>
                <div className="service-info text-center p-2">
                  <h5 className="text-info fw-bold">After Selles Service</h5>
                  <p className="text-secondary">
                    We Provive you Good Quality Servicing after sells service
                  </p>
                </div>
              </Card>
            </Col>
          </Fade>
          <Fade right>
            <Col className=" d-block d-lg-flex">
              <Card className="w-100 p-4 service-card">
                <div className="icon-img mx-auto">
                  <FaThumbsUp
                    className="text-info  bg-light p-3 rounded-circle"
                    size="7em"
                  />
                </div>
                <div className="service-info text-center p-2">
                  <h5 className="text-info fw-bold">Guaranty</h5>
                  <p className="text-secondary">
                    We Guaranty you about ours sells product,We don't compromise
                    with our products quality
                  </p>
                </div>
              </Card>
            </Col>
          </Fade>
        </Row>
      </Container>
    </div>
  );
};

export default ServicePromises;
