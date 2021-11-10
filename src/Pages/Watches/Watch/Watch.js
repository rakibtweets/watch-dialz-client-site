import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Watch = (props) => {
  const { modelName, watchImg, pricing } = props.watch;
  return (
    <Col className=" d-block d-lg-flex">
      <Card>
        <Card.Img className=" img-fluid" variant="top" src={watchImg} />
        <Card.Body className=" text-center py-3 ">
          <h5>{modelName}</h5>
          <h5 className=" fw-bold"> $ {pricing}</h5>
        </Card.Body>
        <div className=" d-flex justify-content-around align-content-center mb-3">
          <Button variant="primary">Details</Button>
          <Button variant="outline-primary">Buy Now</Button>
        </div>
      </Card>
    </Col>
  );
};

export default Watch;
