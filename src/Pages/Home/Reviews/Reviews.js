import React, { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import SingleReview from '../SingleReview/SingleReview';
import Fade from 'react-reveal/Fade';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://watch-dialz-server.vercel.app/user/review')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="mt-5 mb-5">
      <Fade bottom>
        <h3 className="pt-5 text-center mb-5 fw-bold">
          Customer <span className="text-info">Reviews</span>{' '}
        </h3>
      </Fade>

      {/* carousel start */}
      <div className="single-reviewer container">
        <Carousel
          cols={3}
          rows={1}
          gap={10}
          loop
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 3
            },
            {
              breakpoint: 992,
              cols: 2
            },
            {
              breakpoint: 768,
              cols: 2
            },
            {
              breakpoint: 576,
              cols: 1
            }
          ]}
        >
          {reviews.map((review) => (
            <Carousel.Item key={review?._id} className="px-2">
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
