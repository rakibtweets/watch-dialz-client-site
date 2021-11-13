import React, { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user/review')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="mt-5 mb-5">
      <h3 className="pt-5 text-center mb-5 fw-bold">
        Customer <span className="text-info">Reviews</span>{' '}
      </h3>

      {/* carousel start */}
      <div className="single-reviewer container">
        <Carousel cols={3} rows={1} gap={10} loop>
          {reviews.map((review) => (
            <Carousel.Item
              key={review?._id}
              className="px-2"
            >
              {' '}
              <SingleReview key={review?._id} review={review} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* carousel end */}
    </div>
  );
};

export default Reviews;
