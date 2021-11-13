import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';
import swal from 'sweetalert';

const Booking = () => {
  const { user } = useAuth();
  const [watch, setWatch] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fast-basin-80708.herokuapp.com/watch/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWatch(data);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = 'Pending';
    data.watch = watch;
    console.log(data);
    fetch(
      `https://fast-basin-80708.herokuapp.com/myBuyingList/${user?.email}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Congratulations!', 'You Order Successfully', 'success');
          reset();
        }
      });
  };

  return (
    <div>
      <h2 className=" text-center text-info fw-bold my-3">Order Watch</h2>
      <Container>
        <Row>
          <Col lg={6} className="destination-info">
            <div className="destination-img ">
              <img className="img-fluid" src={watch?.watchImg} alt="" />
            </div>
            <div className="destination-info mt-4">
              <h5 className="text-success fw-bold">{watch?.modelName}</h5>

              <p className=" fw-bold h6">Price: $ {watch?.pricing}</p>
              <div className="shor-description text-secondary small">
                <p>{watch?.productDescription}</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="order-form">
            {user.email && (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4">
                <h4 className=" text-center fw-bold my-3">Order Form</h4>
                <input
                  className=" form-control"
                  defaultValue={user?.displayName}
                  {...register('buyerName')}
                />
                <br />
                <input
                  type="text"
                  className=" form-control"
                  defaultValue={user?.email}
                  {...register('email')}
                />
                <br />

                <input
                  type="text"
                  className=" form-control"
                  placeholder="Your Address"
                  {...register('address', { required: true })}
                />
                <br />
                {errors.address && (
                  <span className="text-danger">Address is required</span>
                )}
                <input
                  type="number"
                  className=" form-control"
                  placeholder="Phone No."
                  {...register('phone', { required: true })}
                />
                <br />
                {errors.phone && (
                  <span className="text-danger">Phone No is required</span>
                )}
                <input
                  type="date"
                  className=" form-control"
                  {...register('bookingDate', { required: true })}
                />

                <br />
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
