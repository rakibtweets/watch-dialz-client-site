import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Watch = (props) => {
  const { _id, modelName, watchImg, pricing } = props.watch;
  return (
    <Col className=" d-block d-lg-flex">
      <Card>
        <Card.Img className=" img-fluid" variant="top" src={watchImg} />
        <Card.Body className=" text-center py-3 ">
          <h5>{modelName}</h5>
          <h5 className=" fw-bold"> $ {pricing}</h5>
        </Card.Body>
        <div className=" d-flex justify-content-around align-content-center mb-3">
          <Link to={`/watch/${_id}`}>
            <Button variant="primary">Details</Button>
          </Link>
          <Link to={`/booking/${_id}`}>
            <Button variant="outline-primary">Buy Now </Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Watch;
