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
        // console.log(data);
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
            <h4 className=" text-center p-3 text-primary fw-bold">
              All Watches
            </h4>
            <Row xs={1} md={2} lg={3} className="g-3">
              {watches.map((watch) => (
                <Watch key={watch.modelName} watch={watch} />
              ))}
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default AllWatches;
