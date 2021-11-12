import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Watch from '../../Watches/Watch/Watch';

const FeaturedWatches = () => {
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
      <div className="text-center my-5">
        {isloading ? (
          <Spinner className="mt-3" animation="border" variant="danger" />
        ) : (
          <Container>
            <h3 className="text-center fw-bold my-5">
              Featured <span className="text-info">Watches</span>
            </h3>
            <Row xs={1} md={2} lg={3} className="g-3">
              {watches.slice(0, 6).map((watch) => (
                <Watch key={watch.modelName} watch={watch} />
              ))}
            </Row>
          </Container>
        )}
      </div>
    </>
  );
};

export default FeaturedWatches;
