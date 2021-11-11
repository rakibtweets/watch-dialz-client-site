import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Watch from '../Watch/Watch';

const AllWatches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allWatches')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setWatches(data);
      });
  }, []);
  return (
    <>
      <h4 className=" text-center p-3 text-primary fw-bold">All Watches</h4>

      <Container>
        <Row xs={1} md={2} lg={3} className="g-3">
          {watches.map((watch) => (
            <Watch key={watch.modelName} watch={watch} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllWatches;
