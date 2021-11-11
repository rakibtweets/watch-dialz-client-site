import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './SingleReview.css';
import UserAvatar from 'react-user-avatar';

const SingleReview = (props) => {
  const { userReview, reviweText, rating } = props.review;
  return (
    <div className="reviewer p-2 d-inline-block d-lg-flex">
      <Card className="p-2 reviewer-card">
        <div className="w-100 my-3 d-flex justify-content-center align-items-center">
          <UserAvatar
            className=" fs-2 text-white"
            size="100"
            name={userReview}
          />
        </div>
        <Card.Body>
          <Card.Title className="fw-bold text-center pb-2">
            {userReview}
          </Card.Title>
          <Card.Text className="text-center">
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star text-warning fs-4"
              fullSymbol="fa fa-star text-warning  fs-4"
              readonly
            />
            <p className="py-2">{reviweText}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleReview;
