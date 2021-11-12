import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Watch from '../Watch/Watch';

const AllWatches = () => {
  const [watches, setWatches] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/allWatches')
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
        setIsloading(false);
      });
  }, [isloading]);
  return (
    <>
      <div className="text-center">
        {isloading ? (
          <Spinner className="mt-3" animation="border" variant="danger" />
        ) : (
          <Container>
            <h4 className=" text-center p-3 fw-bold">
              Explore Our <span className="text-info">Watch</span>
            </h4>
            <Row xs={1} md={2} lg={3} className="gx-4 gy-5">
              {watches.map((watch) => (
                <Watch key={watch._id} watch={watch} />
              ))}
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default AllWatches;
