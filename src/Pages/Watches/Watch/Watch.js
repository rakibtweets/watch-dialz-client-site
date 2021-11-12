import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Watch.css';

const Watch = (props) => {
  const { _id, modelName, watchImg, pricing, availability, brand } =
    props.watch;
  return (
    <Col className=" d-block d-lg-flex">
      <Card className="watch-card">
        <Card.Img className="card-img" src={watchImg} />
        <Card.Body className=" text-center py-3 ">
          <h5 className=" text-success fw-bold">{modelName}</h5>
          <h6 className=" text-secondary fw-bold">{brand}</h6>
          <h5 className=" fw-bold"> $ {pricing}</h5>
          <h5 className=" fw-bold text-secondary"> {availability}</h5>
        </Card.Body>
        <div className=" d-flex justify-content-around align-content-center mb-4">
          <Link to={`/watch/${_id}`}>
            <Button variant="success">Details</Button>
          </Link>
          <Link to={`/booking/${_id}`}>
            <Button variant="outline-success">Buy Now </Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Watch;
