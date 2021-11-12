import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';

const UserReviews = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const handleReviewRating = (rate) => {
    setRating(rate);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.rating = rating;

    fetch('http://localhost:5000/user/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Submmited', 'Reviewed Successfully', 'success');
          reset();
        }
      });
  };

  return (
    <div>
      <div style={{ background: '#FFFFF', boxShadow: '0 0 5px 0 gray' }}>
        <h4 className="fw-bold text-center py-4">
          Your <span className="text-info">Reviews</span>{' '}
        </h4>
      </div>
      <div className="review__container mt-5">
        {user.email && (
          <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              defaultValue={user?.displayName}
              {...register('userReview')}
            />
            <br />
            <textarea
              className="form-control"
              placeholder="Write Reviews"
              {...register('reviweText', { required: true })}
            />
            <br />
            <div className="d-flex justify-content-start align-items-center gap-3">
              <label
                className="text-bold h5 fw-bold text-info"
                htmlFor="rating"
              >
                Rating:
              </label>
              <Rating
                emptySymbol="far fa-star fa-2x text-success"
                fullSymbol="fas fa-star fa-2x text-success"
                fractions={2}
                onChange={handleReviewRating}
                required
              />
              <p className="fw-bold">{rating}</p>
            </div>
            <br />
            {errors.exampleRequired && <span>This field is required</span>}

            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
