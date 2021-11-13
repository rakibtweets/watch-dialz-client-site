import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Watch.css';
import { FaShoppingCart } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const Watch = (props) => {
  const {
    _id,
    modelName,
    watchImg,
    pricing,
    availability,
    brand,
    productDescription,
  } = props.watch;
  return (
    <Col className=" d-block d-lg-flex">
      <Fade bottom cascade>
        <Card className="watch-card">
          <Card.Img className="card-img" src={watchImg} />
          <Card.Body className=" text-center py-3 ">
            <h5 className=" text-success fw-bold">{modelName}</h5>
            <h6 className=" text-secondary fw-bold">{brand}</h6>
            <div className="d-flex justify-content-between px-2">
              <h5 className=" fw-bold text-success"> $ {pricing}</h5>
              <h5 className=" fw-bold text-secondary"> {availability}</h5>
            </div>
            <p className="small text-secondary py-2">
              {productDescription.slice(0, 100)}
            </p>
          </Card.Body>
          <div className=" d-flex justify-content-around align-content-center mb-4">
            <Link to={`/watch/${_id}`}>
              <Button variant="success">Details</Button>
            </Link>
            <Link to={`/booking/${_id}`}>
              <Button variant="outline-success">
                <FaShoppingCart className="mx-2" size="1.2em" />
                Buy Now{' '}
              </Button>
            </Link>
          </div>
        </Card>
      </Fade>
    </Col>
  );
};

export default Watch;
