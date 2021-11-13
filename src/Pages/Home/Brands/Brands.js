import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Brands = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center pb-4">
        Top <span className="text-info">Brands</span>
      </h2>
      <Row
        xs={2}
        md={3}
        lg={6}
        className="g-4 align-items-center justify-items-center"
      >
        <Col>
          <div className="brand-img">
            <img
              className=" w-75 img-fluid"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/1200px-Rolex_logo.svg.png"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="brand-img">
            <img
              className="w-75 img-fluid"
              src="https://kurz1948.ch/files/aaa-omega-logo-2_607da26f2503c.png"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="brand-img">
            <img
              className="w-75 img-fluid"
              src="https://www.pngitem.com/pimgs/m/278-2783345_seiko-logo-png-transparent-seiko-watches-logo-png.png"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="brand-img">
            <img
              className="w-75 img-fluid"
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Rado_%28Uhrenmarke%29_logo.svg"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="brand-img">
            <img
              className="w-75 img-fluid"
              src="https://logos-download.com/wp-content/uploads/2016/06/Titan_Watches_logo.png"
              alt=""
            />
          </div>
        </Col>
        <Col>
          <div className="brand-img">
            <img
              className="w-75 img-fluid"
              src="https://upload.wikimedia.org/wikipedia/de/thumb/b/bb/Logo_Bulova.svg/1200px-Logo_Bulova.svg.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Brands;
