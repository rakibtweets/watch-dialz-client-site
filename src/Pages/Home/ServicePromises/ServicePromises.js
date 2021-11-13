import React from 'react';
import './ServicePromises.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaPeopleCarry,
  FaHeadset,
  FaServicestack,
  FaThumbsUp,
} from 'react-icons/fa';

const ServicePromises = () => {
  return (
    <div>
      <h3 className="fw-bold text-center my-4">
        Our <span className="text-info">Services</span>
      </h3>
      <Container>
        <Row xs={1} md={2} lg={4}>
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
                  We Promise to Deliver Our products on Time
                </p>
              </div>
            </Card>
          </Col>
          <Col className=" d-block d-lg-flex">
            <Card className="w-100 p-4 service-card">
              <div className="icon-img mx-auto">
                <FaHeadset
                  className="text-info  bg-light p-3 rounded-circle"
                  size="7em"
                />
              </div>
              <div className="service-info text-center p-2">
                <h5 className="text-info fw-bold">OnLine Support</h5>
                <p className="text-secondary">
                  We Give You 24 hrs on line support
                </p>
              </div>
            </Card>
          </Col>
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
        </Row>
      </Container>
    </div>
  );
};

export default ServicePromises;
