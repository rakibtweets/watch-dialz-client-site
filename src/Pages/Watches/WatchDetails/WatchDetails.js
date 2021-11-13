import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const WatchDetails = () => {
  const [watch, setWatch] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fast-basin-80708.herokuapp.com/watch/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWatch(data);
      });
  }, [id]);

  return (
    <div>
      <h2 className=" fw-bold text-success text-center my-3">Watch Details</h2>
      <Container>
        <Row xs={1} lg={2}>
          <Col>
            <div className=" pb-3">
              <img className="w-100" src={watch?.watchImg} alt="" />
            </div>
          </Col>
          <Col>
            <div className="destination-info">
              <h4> {watch?.modelName}</h4>

              <p className=" fw-bold">Price: ${watch?.pricing}</p>
              <p className=" fw-bold">Availability: {watch?.availability}</p>
              <div className="shor-description">
                <p>{watch?.productDescription}</p>
              </div>
            </div>
            <Link to={`/booking/${id}`}>
              <Button variant="outline-success">Buy Now </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WatchDetails;
