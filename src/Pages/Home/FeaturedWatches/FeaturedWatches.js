import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Watch from '../../Watches/Watch/Watch';

const FeaturedWatches = () => {
  const [watches, setWatches] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetch('https://fast-basin-80708.herokuapp.com/allWatches')
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
                <Watch key={watch._id} watch={watch} />
              ))}
            </Row>
            <div className="mt-4">
              <Link to="/watches">
                <button className="px-4 my-3 btn btn-outline-success rounded-pill">
                  Explore more watches
                </button>
              </Link>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

export default FeaturedWatches;
